<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Navigation />
    
    <main class="flex-1">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">About JetGO</h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Modern ticket management solution inspired by Atlassian's design excellence.
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p class="text-gray-600 mb-6">
            To simplify ticket management and streamline workflow processes for teams of all sizes.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Our Story</h3>
            <p class="text-gray-600">
              Founded in 2024, JetGO was created to address the growing need for 
              intuitive and efficient ticket management systems.
            </p>
          </div>
          
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
            <p class="text-gray-600">
              To become the leading ticket management platform trusted by teams worldwide.
            </p>
          </div>
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