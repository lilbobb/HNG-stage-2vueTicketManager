<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Navigation />
    
    <main class="flex-1">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team. We'd love to hear from you.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <div class="bg-white rounded-xl shadow-sm p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 "></textarea>
              </div>
              <button type="submit" class="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>

          <div class="space-y-8">
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <span class="text-gray-600">contact@jetgo.com</span>
                </div>
                <div class="flex items-center">
                  <span class="text-gray-600">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
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