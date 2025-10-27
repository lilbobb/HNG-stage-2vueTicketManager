<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="p-2 bg-red-100 rounded-lg">
          <Trash2 class="text-red-600" :size="24" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900">Delete Ticket</h3>
      </div>
      
      <p class="text-gray-600 mb-6">
        Are you sure you want to delete the ticket "<strong>{{ ticket?.title }}</strong>"? 
        This action cannot be undone.
      </p>

      <div class="flex gap-3 justify-end">
        <button
          @click="emit('cancel')"
          class="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
        >
          Cancel
        </button>
        <button
          @click="emit('confirm')"
          class="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg font-medium transition-colors"
        >
          Delete Ticket
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Trash2 } from 'lucide-vue-next';
import type { Ticket } from '../../types';

interface Props {
  isOpen: boolean;
  ticket: Ticket | null;
}

defineProps<Props>();

const emit = defineEmits<{
  cancel: [];
  confirm: [];
}>();
</script>