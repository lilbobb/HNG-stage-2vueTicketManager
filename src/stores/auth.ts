import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { User } from '../types';
import { authService } from '../services/authService';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);

  const isAuthenticated = computed(() => !!user.value);

  const initialize = () => {
    const session = authService.getSession();
    if (session) {
      user.value = session;
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    const userData = await authService.login(email, password);
    if (userData) {
      user.value = userData;
      return true;
    }
    return false;
  };

  const signup = async (email: string, password: string): Promise<boolean> => {
    const userData = await authService.signup(email, password);
    if (userData) {
      user.value = userData;
      return true;
    }
    return false;
  };

  const logout = () => {
    authService.logout();
    user.value = null;
  };

  return {
    user,
    isAuthenticated,
    initialize,
    login,
    signup,
    logout
  };
});