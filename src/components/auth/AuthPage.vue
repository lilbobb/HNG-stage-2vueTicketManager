<template>
  <div class="min-h-screen bg-[#FAFBFC] flex items-center justify-center p-4">
    <Toast
      v-if="toast"
      :model-value="!!toast"
      :message="toast.message"
      :type="toast.type"
      @close="hideToast"
    />
    
    <div class="w-full flex flex-col items-center">
      <LoginForm
        v-if="currentMode === 'login'"
        @success="handleSuccess"
        @error="handleError"
        @switch-to-signup="currentMode = 'signup'"
      />
      <SignupForm
        v-else
        @success="handleSuccess"
        @error="handleError"
        @switch-to-login="currentMode = 'login'"
      />

      <div class="mt-6 text-center">
        <router-link
          to="/"
          class="text-sm text-[#6B778C] hover:text-[#0052CC] transition-colors inline-flex items-center gap-1"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LoginForm from './LoginForm.vue';
import SignupForm from './SignupForm.vue';
import Toast from '../ui/Toast.vue';
import { useToast } from '../../composables/useToast';

interface Props {
  mode?: 'login' | 'signup';
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'login'
});

const router = useRouter();
const { toast, showSuccess, showError, hideToast } = useToast();
const currentMode = ref(props.mode);

const handleSuccess = () => {
  showSuccess(`${currentMode.value === 'login' ? 'Login' : 'Signup'} successful! Redirecting...`);
  setTimeout(() => router.push('/dashboard'), 1500);
};

const handleError = (message: string) => {
  showError(message);
};
</script>
