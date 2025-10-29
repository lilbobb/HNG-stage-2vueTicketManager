<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    <Navigation :show-auth="true" />

    <main class="flex-1">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div class="mb-6 sm:mb-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
          <p class="text-gray-600 text-sm sm:text-base">Welcome back! Here's an overview of your tickets.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
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
            color="neutral"
            :icon="CheckCircle2"
            :trend="8"
          />
        </div>

        <div class="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-sm border border-gray-200">
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Quick Actions</h3>
          <div class="flex flex-col xs:flex-row gap-3 sm:gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              class="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 w-full xs:w-auto px-4 py-3 text-sm sm:text-base"
              @click="createNewTicket"
            >
              <Plus :size="18" class="sm:w-5 sm:h-5 shrink-0" />
              <span class="whitespace-nowrap">Create New Ticket</span>
            </Button>

            <Button 
              variant="secondary" 
              size="lg" 
              class="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 flex items-center justify-center gap-2 w-full xs:w-auto px-4 py-3 text-sm sm:text-base"
              @click="router.push('/tickets')"
            >
              <List :size="18" class="sm:w-5 sm:h-5 shrink-0" />
              <span class="whitespace-nowrap">View All Tickets</span>
            </Button>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Layers, CircleDot, Clock, CheckCircle2, Plus, List } from 'lucide-vue-next';
import Navigation from '../layout/Navigation.vue';
import Footer from '../layout/Footer.vue';
import StatCard from './StatCard.vue';
import Button from '../ui/Button.vue';
import { useTickets } from '../../composables/useTickets';

const router = useRouter();
const { stats } = useTickets();

const createNewTicket = () => {
  router.push('/tickets?create=new');
};
</script>