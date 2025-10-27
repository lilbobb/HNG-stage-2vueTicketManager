<template>
  <div class="min-h-screen flex flex-col">
    <Toast 
      v-if="toast" 
      :model-value="!!toast" 
      :message="toast.message" 
      :type="toast.type" 
      @close="hideToast" 
    />

    <DeleteModal
      :is-open="showDeleteModal"
      :ticket="ticketToDelete"
      @cancel="cancelDelete"
      @confirm="confirmDelete"
    />

    <Navigation :show-auth="true" />

    <main class="flex-1">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900">Ticket Management</h2>
          <button 
            @click="showForm = !showForm"
            class="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md cursor-pointer"
          >
            <Plus :size="20" />
            New Ticket
          </button>
        </div>

        <TicketForm v-if="showForm" :ticket="editingTicket" @submit="handleSubmit" @cancel="resetForm" />

        <TicketList 
          :tickets="tickets" 
          @edit="handleEdit" 
          @delete="handleDelete" 
        />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Plus } from 'lucide-vue-next';
import Navigation from '../layout/Navigation.vue';
import Footer from '../layout/Footer.vue';
import Toast from '../ui/Toast.vue';
import TicketForm from './TicketForm.vue';
import TicketList from './TicketList.vue';
import DeleteModal from './DeleteModal.vue';
import { useTickets } from '../../composables/useTickets';
import { useToast } from '../../composables/useToast';
import type { Ticket } from '../../types';

const { tickets, createTicket, updateTicket, deleteTicket } = useTickets();
const { toast, showSuccess, showError, hideToast } = useToast();
const showForm = ref(false);
const editingTicket = ref<Ticket | null>(null);
const showDeleteModal = ref(false);
const ticketToDelete = ref<Ticket | null>(null);

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

const handleDelete = (ticket: Ticket) => {
  console.log('Delete triggered for ticket:', ticket); 
  ticketToDelete.value = ticket;
  showDeleteModal.value = true;
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