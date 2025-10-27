import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Ticket } from '../types';
import { ticketService } from '../services/ticketService';

export const useTicketStore = defineStore('tickets', () => {
  const tickets = ref<Ticket[]>([]);
  const loading = ref(false);

  const stats = computed(() => ticketService.getStats());

  const loadTickets = () => {
    loading.value = true;
    tickets.value = ticketService.getAll();
    loading.value = false;
  };

  const createTicket = (ticketData: Omit<Ticket, 'id' | 'createdAt'>) => {
    const newTicket = ticketService.create(ticketData);
    tickets.value.push(newTicket);
    return newTicket;
  };

  const updateTicket = (id: string, ticketData: Partial<Ticket>) => {
    const updated = ticketService.update(id, ticketData);
    if (updated) {
      const index = tickets.value.findIndex(t => t.id === id);
      if (index !== -1) {
        tickets.value[index] = updated;
      }
    }
    return updated;
  };

  const deleteTicket = (id: string) => {
    const success = ticketService.delete(id);
    if (success) {
      tickets.value = tickets.value.filter(t => t.id !== id);
    }
    return success;
  };

  return {
    tickets,
    loading,
    stats,
    loadTickets,
    createTicket,
    updateTicket,
    deleteTicket
  };
});