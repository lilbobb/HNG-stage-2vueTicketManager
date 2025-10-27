<template>
  <div class="card-atlantic p-6 hover:shadow-atlantic-lg transition-all rounded-xl bg-surface border border-border/40">
    <div class="flex items-center justify-between">
      <div class="flex-1">
        <p class="text-sm font-medium text-neutral-600 mb-1">{{ label }}</p>
        <p :class="['text-3xl font-bold', colorClass]">{{ value }}</p>
      </div>
      <div :class="['w-12 h-12 rounded-xl flex items-center justify-center', bgClass]">
        <component :is="icon" :class="iconClass" :size="24" />
      </div>
    </div>

    <div v-if="trend" class="mt-4 flex items-center gap-1 text-sm">
      <svg
        v-if="trend > 0"
        class="w-4 h-4 text-success-500"
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
        class="w-4 h-4 text-error-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <span :class="trend > 0 ? 'text-success-600' : 'text-error-600'">
        {{ Math.abs(trend) }}%
      </span>
      <span class="text-neutral-500">vs last period</span>
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
    blue: 'text-primary-500',
    green: 'text-success-500',
    yellow: 'text-warning-600',
    neutral: 'text-neutral-700'
  };
  return colors[props.color];
});

// Icon background
const bgClass = computed(() => {
  const backgrounds = {
    blue: 'bg-primary-50',
    green: 'bg-success-50',
    yellow: 'bg-warning-50',
    neutral: 'bg-neutral-100'
  };
  return backgrounds[props.color];
});

// Icon color
const iconClass = computed(() => {
  const iconColors = {
    blue: 'text-primary-500',
    green: 'text-success-500',
    yellow: 'text-warning-600',
    neutral: 'text-neutral-600'
  };
  return iconColors[props.color];
});
</script>
