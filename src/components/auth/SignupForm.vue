<template>
  <div class="w-full max-w-md">
    <div class="p-8 rounded-2xl shadow-md bg-[#FFFFFF] border border-[#DFE1E6]">
      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-[#0052CC] rounded-2xl mx-auto mb-4 flex items-center justify-center">
          <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fill-rule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-[#172B4D] mb-2">Create Account</h2>
        <p class="text-[#6B778C]">Start managing tickets today</p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <Input
          v-model="email"
          type="email"
          label="Email address"
          :error="errors.email"
          placeholder="you@company.com"
          autocomplete="email"
        />

        <Input
          v-model="password"
          type="password"
          label="Password"
          :error="errors.password"
          placeholder="Create a password"
          autocomplete="new-password"
          help-text="Must be at least 6 characters"
        />

        <Input
          v-model="confirmPassword"
          type="password"
          label="Confirm Password"
          :error="errors.confirmPassword"
          placeholder="Confirm your password"
          autocomplete="new-password"
        />

        <Button
          type="submit"
          variant="primary"
          :disabled="loading"
          class="w-full bg-[#0052CC] hover:bg-[#0747A6] text-white font-medium py-2.5 rounded-lg transition-colors"
          size="lg"
        >
          {{ loading ? 'Creating account...' : 'Create Account' }}
        </Button>
      </form>

      <div class="mt-6 text-center">
        <button
          @click="emit('switchToLogin')"
          class="text-sm text-[#0052CC] hover:text-[#0747A6] font-medium transition-colors"
        >
          Already have an account? <span class="underline">Sign in</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../ui/Input.vue';
import Button from '../ui/Button.vue';
import { validateEmail, validatePassword } from '../../utils/validation';
import { useAuth } from '../../composables/useAuth';

const emit = defineEmits<{
  success: [];
  error: [message: string];
  switchToLogin: [];
}>();

const { signup } = useAuth();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errors = ref<{ email?: string; password?: string; confirmPassword?: string }>({});
const loading = ref(false);

const validate = () => {
  const emailError = validateEmail(email.value);
  const passwordError = validatePassword(password.value);
  let confirmError = null;

  if (!confirmPassword.value) {
    confirmError = 'Please confirm your password';
  } else if (password.value !== confirmPassword.value) {
    confirmError = 'Passwords do not match';
  }
  
  errors.value = {
    email: emailError || undefined,
    password: passwordError || undefined,
    confirmPassword: confirmError || undefined
  };
  
  return !emailError && !passwordError && !confirmError;
};

const handleSubmit = async () => {
  if (!validate()) return;

  loading.value = true;
  try {
    const success = await signup(email.value, password.value);

    if (success) {
      emit('success');
    } else {
      emit('error', 'Email already exists. Please use a different email or sign in.');
    }
  } catch (error) {
    emit('error', 'An error occurred. Please try again.');
  } finally {
    loading.value = false;
  }
};
</script>
