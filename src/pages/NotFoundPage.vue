<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Navigation />
    
    <main class="flex-1">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <p class="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <router-link to="/" class="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Go Home
        </router-link>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navigation from '../components/layout/Navigation.vue';
import Footer from '../components/layout/Footer.vue';
</script>