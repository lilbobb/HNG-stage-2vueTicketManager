<template>
  <nav class="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
      <h1 
        class="text-xl sm:text-2xl font-bold text-blue-600 cursor-pointer whitespace-nowrap" 
        @click="router.push('/')"
      >
        jetGO
      </h1>

      <div v-if="showAuth && isAuthenticated" class="flex items-center gap-2 sm:gap-4">
        <router-link
          to="/dashboard"
          class="px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition text-sm sm:text-base flex items-center gap-1"
        >
          <LayoutDashboard :size="16" class="sm:hidden" />
          <span class="hidden sm:inline">Dashboard</span>
        </router-link>
        
        <router-link
          to="/tickets"
          class="px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition text-sm sm:text-base flex items-center gap-1"
        >
          <Ticket :size="16" class="sm:hidden" />
          <span class="hidden sm:inline">Tickets</span>
        </router-link>
        
        <span class="text-gray-600 text-sm hidden sm:inline truncate max-w-[120px] lg:max-w-[200px]">
          {{ user?.email }}
        </span>
        
        <button
          @click="handleLogout"
          class="flex items-center gap-1 sm:gap-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer text-sm sm:text-base"
        >
          <LogOut :size="16" class="sm:w-4 sm:h-4" />
          <span class="hidden xs:inline">Logout</span>
        </button>
      </div>

      <router-link
        v-else-if="!showAuth"
        to="/login"
        class="px-3 sm:px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition text-sm sm:text-base whitespace-nowrap"
      >
        Login
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { LogOut, LayoutDashboard, Ticket } from 'lucide-vue-next';
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