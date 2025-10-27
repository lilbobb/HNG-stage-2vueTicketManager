<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Navigation />
    
    <main class="flex-1">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Pricing</h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your team.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-sm p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
            <p class="text-4xl font-bold text-gray-900 mb-6">
              $29
              <span class="text-lg text-gray-600 font-normal">/month</span>
            </p>
            
            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-gray-600">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Up to 5 team members
              </li>
              <li class="flex items-center text-gray-600">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                100 tickets per month
              </li>
              <li class="flex items-center text-gray-600">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Basic analytics
              </li>
            </ul>
            
            <button class="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
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