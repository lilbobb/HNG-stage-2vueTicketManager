import { ref } from "vue";

interface ToastState {
  message: string;
  type: "success" | "error";
}

export const useToast = () => {
  const toast = ref<ToastState | null>(null);

  const showSuccess = (message: string) => {
    toast.value = { message, type: "success" };
  };

  const showError = (message: string) => {
    toast.value = { message, type: "error" };
  };

  const hideToast = () => {
    toast.value = null;
  };

  return {
    toast,
    showSuccess,
    showError,
    hideToast,
  };
};
