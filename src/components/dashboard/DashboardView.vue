<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <Navigation :show-auth="true" />

    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
        <p class="text-gray-600">Welcome back! Here's an overview of your tickets.</p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          :value="stats.total" 
          label="Total Tickets" 
          color="blue"
          :icon="Layers"
          :trend="5"
        />
        <StatCard 
          :value="stats.open" 
          label="Open Tickets" 
          color="green"
          :icon="CircleDot"
          :trend="12"
        />
        <StatCard 
          :value="stats.inProgress" 
          label="In Progress" 
          color="yellow"
          :icon="Clock"
          :trend="-3"
        />
        <StatCard 
          :value="stats.closed" 
          label="Closed Tickets" 
          color="gray"
          :icon="CheckCircle2"
          :trend="8"
        />
      </div>

      <!-- Quick Actions -->
      <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <h3 class="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
        <div class="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="primary" 
            size="lg" 
            class="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
            @click="showForm = !showForm"
          >
            <Plus :size="20" />
            Create New Ticket
          </Button>

          <Button 
            variant="secondary" 
            size="lg" 
            class="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 flex items-center gap-2"
            @click="router.push('/tickets')"
          >
            <List :size="20" />
            View All Tickets
          </Button>
        </div>

        <!-- Ticket Form -->
        <TicketForm 
          v-if="showForm" 
          :ticket="editingTicket" 
          @submit="handleSubmit" 
          @cancel="resetForm" 
          class="mt-6"
        />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Layers, CircleDot, Clock, CheckCircle2, Plus, List } from 'lucide-vue-next';
import Navigation from '../layout/Navigation.vue';
import Footer from '../layout/Footer.vue';
import StatCard from './StatCard.vue';
import Button from '../ui/Button.vue';
import TicketForm from '../tickets/TicketForm.vue';
import { useTickets } from '../../composables/useTickets';


const router = useRouter();
const { stats, createTicket, updateTicket } = useTickets();

const showForm = ref(false);
const editingTicket = ref(null);

const handleSubmit = (data: any) => {
  if (editingTicket.value) {
    updateTicket(editingTicket.value.id, data);
  } else {
    createTicket(data);
  }
  resetForm();
};

const resetForm = () => {
  editingTicket.value = null;
  showForm.value = false;
};
</script>
