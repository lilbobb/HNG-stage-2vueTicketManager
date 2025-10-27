<template>
  <nav class="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-blue-600 cursor-pointer" @click="router.push('/')">
        JetGO
      </h1>

      <div v-if="showAuth && isAuthenticated" class="flex items-center gap-4">
        <router-link
          to="/dashboard"
          class="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
        >
          Dashboard
        </router-link>
        <span class="text-gray-600 hidden sm:inline">{{ user?.email }}</span>
        <button
          @click="handleLogout"
          class="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer"
        >
          <LogOut :size="18" />
          <span class="hidden sm:inline">Logout</span>
        </button>
      </div>

      <router-link
        v-else-if="!showAuth"
        to="/login"
        class="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
      >
        Login
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { LogOut } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { useAuth } from '../../composables/useAuth';

interface Props {
  showAuth?: boolean;
}

withDefaults(defineProps<Props>(), {
  showAuth: false
});

const router = useRouter();
const { user, isAuthenticated, logout } = useAuth();

const handleLogout = () => {
  logout();
  router.push('/');
};
</script>