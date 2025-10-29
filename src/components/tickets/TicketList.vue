<template>
  <div>
    <div class="mb-6">
      <div class="relative max-w-md">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search tickets by title or description..."
          class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500 transition"
        >
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search class="w-5 h-5 text-gray-400" />
        </div>
        <button
          v-if="searchQuery"
          @click="clearSearch"
          class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition"
        >
          <X class="w-4 h-4" />
        </button>
      </div>
      
      <div v-if="searchQuery" class="mt-2 text-sm text-gray-600">
        Found {{ filteredTickets.length }} ticket{{ filteredTickets.length !== 1 ? 's' : '' }} 
        <button 
          @click="clearSearch"
          class="text-blue-600 hover:text-blue-700 underline ml-2"
        >
          Clear search
        </button>
      </div>
    </div>

    <div v-if="filteredTickets.length === 0 && !searchQuery" class="bg-white p-12 rounded-xl shadow-sm border border-gray-200 text-center">
      <p class="text-gray-500 text-lg">
        No tickets found. Create your first ticket to get started!
      </p>
    </div>

    <div v-else-if="filteredTickets.length === 0 && searchQuery" class="bg-white p-12 rounded-xl shadow-sm border border-gray-200 text-center">
      <p class="text-gray-500 text-lg">
        No tickets found for "{{ searchQuery }}"
      </p>
      <button 
        @click="clearSearch"
        class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Clear Search
      </button>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <TicketCard
        v-for="ticket in filteredTickets"
        :key="ticket.id"
        :ticket="ticket"
        @edit="emit('edit', $event)"
        @delete="emit('delete', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Search, X } from 'lucide-vue-next';
import type { Ticket } from '../../types';
import TicketCard from './TicketCard.vue';

interface Props {
  tickets: Ticket[];
}

const props = defineProps<Props>();
const searchQuery = ref('');

const filteredTickets = computed(() => {
  if (!searchQuery.value.trim()) {
    return props.tickets;
  }

  const query = searchQuery.value.toLowerCase().trim();
  return props.tickets.filter(ticket => 
    ticket.title.toLowerCase().includes(query) ||
    (ticket.description && ticket.description.toLowerCase().includes(query)) ||
    ticket.status.toLowerCase().includes(query) ||
    (ticket.priority && ticket.priority.toLowerCase().includes(query))
  );
});

const clearSearch = () => {
  searchQuery.value = '';
};

const emit = defineEmits<{
  edit: [ticket: Ticket];
  delete: [id: string];
}>();
</script>