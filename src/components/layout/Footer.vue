<template>
  <footer class="bg-gray-900 text-gray-300 py-8">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
              </svg>
            </div>
            <span class="text-lg font-semibold text-white">jetGO</span>
          </div>
          <p class="text-sm text-gray-400">
            Modern ticket management inspired by Atlassian's design excellence.
          </p>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-white mb-3">Product</h3>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/features" class="text-gray-400 hover:text-blue-400 transition-colors">Features</router-link></li>
            <li><router-link to="/pricing" class="text-gray-400 hover:text-blue-400 transition-colors">Pricing</router-link></li>
            <li><router-link to="/documentation" class="text-gray-400 hover:text-blue-400 transition-colors">Documentation</router-link></li>
            <li><router-link to="/api" class="text-gray-400 hover:text-blue-400 transition-colors">API</router-link></li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-white mb-3">Company</h3>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/about" class="text-gray-400 hover:text-blue-400 transition-colors">About</router-link></li>
            <li><router-link to="/blog" class="text-gray-400 hover:text-blue-400 transition-colors">Blog</router-link></li>
            <li><router-link to="/careers" class="text-gray-400 hover:text-blue-400 transition-colors">Careers</router-link></li>
            <li><router-link to="/contact" class="text-gray-400 hover:text-blue-400 transition-colors">Contact</router-link></li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-500">
          &copy; 2025 jetGO. All rights reserved.
        </p>
        <div class="flex items-center gap-6 text-sm">
          <router-link to="/privacy" class="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</router-link>
          <router-link to="/terms" class="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>