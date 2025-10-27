<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Navigation />
    
    <main class="flex-1">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div class="bg-white rounded-xl shadow-sm p-8">
          <p class="text-gray-600">Privacy policy content coming soon...</p>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navigation from '../components/layout/Navigation.vue';
import Footer from '../components/layout/Footer.vue';
</script>