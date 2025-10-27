import { useTicketStore } from "../stores/tickets";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

export const useTickets = () => {
  const ticketStore = useTicketStore();
  const { tickets, loading, stats } = storeToRefs(ticketStore);

  onMounted(() => {
    ticketStore.loadTickets();
  });

  return {
    tickets,
    loading,
    stats,
    createTicket: ticketStore.createTicket,
    updateTicket: ticketStore.updateTicket,
    deleteTicket: ticketStore.deleteTicket,
    reload: ticketStore.loadTickets,
  };
};
