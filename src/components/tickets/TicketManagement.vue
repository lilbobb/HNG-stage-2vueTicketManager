<template>
  <div class="min-h-screen flex flex-col">
    <Toast v-if="toast" :model-value="!!toast" :message="toast.message" :type="toast.type" @close="hideToast" />

    <DeleteModal :is-open="showDeleteModal" :ticket="ticketToDelete" @cancel="cancelDelete" @confirm="confirmDelete" />

    <Navigation :show-auth="true" />

    <main class="flex-1">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <div class="flex items-center gap-2 sm:gap-4">
            <button @click="router.push('/dashboard')"
              class="flex items-center gap-1 px-2 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition sm:hidden shrink-0">
              <ArrowLeft :size="16" />
              <span class="text-xs sr-only">Back to Dashboard</span>
            </button>
            <h2 class="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 truncate">
              Ticket Management
            </h2>
          </div>
          <button v-if="!showForm" @click="showForm = true"
            class="flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md cursor-pointer text-sm sm:text-base">
            <Plus :size="18" class="sm:w-5 sm:h-5 shrink-0" />
            <span class="whitespace-nowrap">New Ticket</span>
          </button>
          <button v-else @click="resetForm"
            class="flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors shadow-md cursor-pointer text-sm sm:text-base">
            <X :size="18" class="sm:w-5 sm:h-5 shrink-0" />
            <span class="whitespace-nowrap">Cancel</span>
          </button>
        </div>

        <div v-if="showForm" class="sm:hidden mb-6">
          <TicketForm :ticket="editingTicket" @submit="handleSubmit" @cancel="resetForm" />
        </div>

        <div class="hidden sm:grid sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div v-if="showForm" class="lg:col-span-1">
            <div class="sticky top-6">
              <TicketForm :ticket="editingTicket" @submit="handleSubmit" @cancel="resetForm" />
            </div>
          </div>

          <div :class="['transition-all duration-300', showForm ? 'lg:col-span-2' : 'col-span-full']">
            <TicketList :tickets="tickets" @edit="handleEdit" @delete="handleDelete" />
          </div>
        </div>

        <div class="sm:hidden">
          <TicketList v-if="!showForm" :tickets="tickets" @edit="handleEdit" @delete="handleDelete" />
        </div>

        <button v-if="!showForm" @click="showForm = true"
          class="fixed bottom-6 right-6 sm:hidden z-40 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center cursor-pointer">
          <Plus :size="24" />
        </button>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Plus, ArrowLeft, X } from 'lucide-vue-next';
import Navigation from '../layout/Navigation.vue';
import Footer from '../layout/Footer.vue';
import Toast from '../ui/Toast.vue';
import TicketForm from './TicketForm.vue';
import TicketList from './TicketList.vue';
import DeleteModal from './DeleteModal.vue';
import { useTickets } from '../../composables/useTickets';
import { useToast } from '../../composables/useToast';
import type { Ticket } from '../../types';

const route = useRoute();
const router = useRouter();
const { tickets, createTicket, updateTicket, deleteTicket } = useTickets();
const { toast, showSuccess, showError, hideToast } = useToast();
const showForm = ref(false);
const editingTicket = ref<Ticket | null>(null);
const showDeleteModal = ref(false);
const ticketToDelete = ref<Ticket | null>(null);

onMounted(() => {
  checkQueryParams();
});

watch(() => route.query, () => {
  checkQueryParams();
});

const checkQueryParams = () => {
  if (route.query.create === 'new') {
    showForm.value = true;
    router.replace({ query: {} });
  }
};

const handleSubmit = (data: Omit<Ticket, 'id' | 'createdAt'>) => {
  try {
    if (editingTicket.value) {
      updateTicket(editingTicket.value.id, data);
      showSuccess('Ticket updated successfully!');
    } else {
      createTicket(data);
      showSuccess('Ticket created successfully!');
    }
    resetForm();
  } catch (error) {
    showError('An error occurred. Please try again.');
  }
};

const handleEdit = (ticket: Ticket) => {
  editingTicket.value = ticket;
  showForm.value = true;
};

const handleDelete = (ticketId: string) => {
  const ticket = tickets.value.find(t => t.id === ticketId);
  if (ticket) {
    console.log('Delete triggered for ticket:', ticket);
    ticketToDelete.value = ticket;
    showDeleteModal.value = true;
  }
};

const confirmDelete = () => {
  if (ticketToDelete.value) {
    try {
      console.log('Deleting ticket with ID:', ticketToDelete.value.id);
      deleteTicket(ticketToDelete.value.id);
      showSuccess('Ticket deleted successfully!');
    } catch (error) {
      console.error('Delete error:', error);
      showError('Failed to delete ticket.');
    }
  }
  cancelDelete();
};

const cancelDelete = () => {
  showDeleteModal.value = false;
  ticketToDelete.value = null;
};

const resetForm = () => {
  editingTicket.value = null;
  showForm.value = false;
};
</script>