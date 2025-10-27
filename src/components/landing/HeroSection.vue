<template>
  <div class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-gray-800">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative z-10">
      <div class="text-center">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Manage Your Tickets Effortlessly
        </h2>
        <p class="text-xl sm:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto">
          Streamline your workflow with our powerful ticket management system. Track, organize, and resolve issues
          faster than ever.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="router.push('/signup')"
            class="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 cursor-pointer">
            Get Started
          </button>
          <button @click="router.push('/login')"
            class="px-8 py-4 bg-white text-blue-500 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300 border-2 border-blue-200 hover:border-blue-300 shadow-sm cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </div>

    <!-- Softer, more subtle decorative elements -->
    <div class="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
    <div class="absolute bottom-20 left-10 w-48 h-48 bg-cyan-100 rounded-full opacity-40 blur-xl"></div>
    <div class="absolute top-1/3 left-1/4 w-24 h-24 bg-green-100 rounded-full opacity-30 blur-lg"></div>
    
    <!-- Subtle grid pattern for texture -->
    <div class="absolute inset-0 opacity-[0.02] bg-[length:50px_50px] bg-[linear-gradient(to_right,#1e40af_1px,transparent_1px),linear-gradient(to_bottom,#1e40af_1px,transparent_1px)]"></div>

    <WaveBackground />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import WaveBackground from './WaveBackground.vue';

const router = useRouter();
</script>