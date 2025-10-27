<template>
  <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200">
    <div class="flex justify-between items-start mb-4">
      <h3 class="text-xl font-bold text-gray-900 flex-1">{{ ticket.title }}</h3>
      <div class="flex gap-2 ml-2">
        <button
          @click="emit('edit', ticket)"
          class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition cursor-pointer"
          title="Edit ticket"
        >
          <Edit2 :size="18" />
        </button>
        <button
          @click="emit('delete', ticket)"
          class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
          title="Delete ticket"
        >
          <Trash2 :size="18" />
        </button>
      </div>
    </div>

    <p v-if="ticket.description" class="text-gray-600 mb-4 line-clamp-3">
      {{ ticket.description }}
    </p>

    <div class="flex flex-wrap gap-2 mb-4">
      <span
        :class="['px-3 py-1 rounded-full text-sm font-medium border', getStatusColor(ticket.status)]"
      >
        {{ formatStatus(ticket.status) }}
      </span>
      <span
        v-if="ticket.priority"
        :class="['px-3 py-1 rounded-full text-sm font-medium', getPriorityColor(ticket.priority)]"
      >
        {{ ticket.priority }}
      </span>
    </div>

    <p class="text-sm text-gray-500">
      Created: {{ formatDate(ticket.createdAt) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Edit2, Trash2 } from 'lucide-vue-next';
import type { Ticket } from '../../types';
import { formatDate, formatStatus, getStatusColor, getPriorityColor } from '../../utils/helpers';

interface Props {
  ticket: Ticket;
}

defineProps<Props>();

const emit = defineEmits<{
  edit: [ticket: Ticket];
  delete: [id: string];
}>();
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>