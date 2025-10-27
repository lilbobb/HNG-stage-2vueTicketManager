<template>
  <div class="p-6 hover:shadow-lg transition-all rounded-xl bg-white border border-gray-200">
    <div class="flex items-center justify-between">
      <div class="flex-1">
        <p class="text-sm font-medium text-gray-600 mb-1">{{ label }}</p>
        <p :class="['text-3xl font-bold', colorClass]">{{ value }}</p>
      </div>
      <div :class="['w-12 h-12 rounded-xl flex items-center justify-center', bgClass]">
        <component :is="icon" :class="iconClass" :size="24" />
      </div>
    </div>

    <div v-if="trend" class="mt-4 flex items-center gap-1 text-sm">
      <svg
        v-if="trend > 0"
        class="w-4 h-4 text-green-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        v-else
        class="w-4 h-4 text-red-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <span :class="trend > 0 ? 'text-green-600' : 'text-red-600'">
        {{ Math.abs(trend) }}%
      </span>
      <span class="text-gray-500">vs last period</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue';

interface Props {
  value: number;
  label: string;
  color: 'blue' | 'green' | 'yellow' | 'neutral';
  icon: Component;
  trend?: number;
}

const props = defineProps<Props>();

// Text color
const colorClass = computed(() => {
  const colors = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    neutral: 'text-gray-700'
  };
  return colors[props.color];
});

const bgClass = computed(() => {
  const backgrounds = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    yellow: 'bg-yellow-50',
    neutral: 'bg-gray-100'
  };
  return backgrounds[props.color];
});

const iconClass = computed(() => {
  const iconColors = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    neutral: 'text-gray-600'
  };
  return iconColors[props.color];
});
</script>