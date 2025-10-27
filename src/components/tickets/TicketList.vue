<template>
  <div v-if="tickets.length === 0" class="bg-surface p-12 rounded-xl shadow-card text-center">
    <p class="text-neutral-500 text-lg">
      No tickets found. Create your first ticket to get started!
    </p>
  </div>

  <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <TicketCard
      v-for="ticket in tickets"
      :key="ticket.id"
      :ticket="ticket"
      @edit="emit('edit', $event)"
      @delete="emit('delete', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { Ticket } from '../../types';
import TicketCard from './TicketCard.vue';

interface Props {
  tickets: Ticket[];
}

defineProps<Props>();

const emit = defineEmits<{
  edit: [ticket: Ticket];
  delete: [id: string];
}>();
</script>
