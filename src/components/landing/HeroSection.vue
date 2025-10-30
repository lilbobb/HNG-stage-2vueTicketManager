<template>
  <div class="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-cyan-50 text-gray-800">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32 relative z-10">
      <div class="text-center">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Manage Your Tickets Effortlessly
        </h2>
        <p class="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2">
          Streamline your workflow with our powerful ticket management system. Track, organize, and resolve issues
          faster than ever.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <template v-if="!isAuthenticated">
            <Button @click="router.push('/signup')" variant="primary" size="lg"
              class="w-full sm:w-auto transform hover:-translate-y-1 transition-transform duration-300">
              Get Started
            </Button>
            <Button @click="router.push('/login')" variant="subtle" size="lg"
              class="w-full sm:w-auto transform hover:-translate-y-1 transition-transform duration-300 border-blue-200 hover:border-blue-300">
              Login
            </Button>
          </template>
          <Button v-else @click="router.push('/dashboard')" variant="primary" size="lg"
            class="w-full sm:w-auto transform hover:-translate-y-1 transition-transform duration-300">
            Go to Dashboard
          </Button>
        </div>
      </div>
    </div>

    <div class="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
    <div class="absolute bottom-20 left-10 w-48 h-48 bg-cyan-100 rounded-full opacity-40 blur-xl"></div>
    <div class="absolute top-1/3 left-1/4 w-24 h-24 bg-green-100 rounded-full opacity-30 blur-lg"></div>

    <div
      class="absolute inset-0 opacity-[0.02] bg-size-[50px_50px] bg-[linear-gradient(to_right,#1e40af_1px,transparent_1px),linear-gradient(to_bottom,#1e40af_1px,transparent_1px)]">
    </div>

    <WaveBackground />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import WaveBackground from './WaveBackground.vue';
import Button from '../ui/Button.vue';
import { useAuth } from '../../composables/useAuth';
const router = useRouter();
const { isAuthenticated } = useAuth(); // Destructure
</script>