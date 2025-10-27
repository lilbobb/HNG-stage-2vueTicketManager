<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Navigation />
    
    <main class="flex-1">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Features</h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to streamline your ticket management workflow.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-sm p-6">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div class="w-6 h-6 text-blue-600">📋</div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Ticket Management</h3>
            <p class="text-gray-600">Create, track, and manage tickets with ease.</p>
          </div>
          <div class="bg-white rounded-xl shadow-sm p-6">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div class="w-6 h-6 text-blue-600">👥</div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Team Collaboration</h3>
            <p class="text-gray-600">Work together seamlessly with your team members.</p>
          </div>
          <div class="bg-white rounded-xl shadow-sm p-6">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div class="w-6 h-6 text-blue-600">⏱️</div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Time Tracking</h3>
            <p class="text-gray-600">Monitor time spent on each ticket accurately.</p>
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