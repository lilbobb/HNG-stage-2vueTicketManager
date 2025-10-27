<template>
  <Transition name="slide-right">
    <div v-if="modelValue" :class="toastClasses">
      <div class="flex items-start gap-3">
        <div :class="iconClasses">
          <CheckCircle v-if="type === 'success'" :size="20" />
          <AlertCircle v-else-if="type === 'error'" :size="20" />
          <Info v-else-if="type === 'info'" :size="20" />
          <AlertTriangle v-else :size="20" />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900">{{ message }}</p>
          <p v-if="description" class="mt-1 text-sm text-gray-700">{{ description }}</p>
        </div>
        <button
          @click="hideToast"
          class="flex-shrink-0 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <X :size="18" />
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, watch, onMounted, onUnmounted } from 'vue';
import { CheckCircle, AlertCircle, Info, AlertTriangle, X } from 'lucide-vue-next';

interface Props {
  modelValue: boolean;
  message: string;
  description?: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 4000
});

const emit = defineEmits<{
  close: [];
  'update:modelValue': [value: boolean];
}>();

let timer: number | undefined;

const hideToast = () => {
  if (timer !== undefined) {
    clearTimeout(timer);
    timer = undefined;
  }
  emit('close');
  emit('update:modelValue', false);
};

const startTimer = () => {
  if (timer !== undefined) {
    clearTimeout(timer);
  }
  timer = window.setTimeout(() => {
    hideToast();
  }, props.duration);
};

const toastClasses = computed(() => {
  const baseClasses =
    'fixed top-4 right-4 z-50 w-full max-w-md p-4 rounded-lg shadow-xl border-l-4 bg-white';

  const typeClasses = {
    success: 'border-green-500',
    error: 'border-red-500',
    info: 'border-blue-500',
    warning: 'border-yellow-500'
  };

  return `${baseClasses} ${typeClasses[props.type]}`;
});

const iconClasses = computed(() => {
  const baseClasses = 'flex-shrink-0';

  const colorClasses = {
    success: 'text-green-600',
    error: 'text-red-600',
    info: 'text-blue-600',
    warning: 'text-yellow-600'
  };

  return `${baseClasses} ${colorClasses[props.type]}`;
});

watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal && props.duration > 0) {
      startTimer();
    } else if (!newVal && timer !== undefined) {
      clearTimeout(timer);
      timer = undefined;
    }
  }
);

onMounted(() => {
  if (props.modelValue && props.duration > 0) {
    startTimer();
  }
});

onUnmounted(() => {
  if (timer !== undefined) {
    clearTimeout(timer);
    timer = undefined;
  }
});
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>