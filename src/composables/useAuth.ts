import { useAuthStore } from '../stores/auth';
import { storeToRefs } from 'pinia';

export const useAuth = () => {
  const authStore = useAuthStore();
  const { user, isAuthenticated } = storeToRefs(authStore);

  return {
    user,
    isAuthenticated,
    login: authStore.login,
    signup: authStore.signup,
    logout: authStore.logout
  };
};