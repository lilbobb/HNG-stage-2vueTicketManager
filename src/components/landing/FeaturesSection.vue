<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="text-center mb-12">
      <h3 class="text-3xl font-bold text-gray-900 mb-4">
        Everything You Need to Manage Tickets
      </h3>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Powerful features designed for teams of all sizes
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(feature, idx) in features"
        :key="idx"
        class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
      >
        <div
          :class="[
            'w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300',
            feature.bgClass
          ]"
        >
          <component
            :is="feature.icon"
            :class="['transition-colors duration-300', feature.iconClass]"
            :size="24"
          />
        </div>
        <h4 class="text-xl font-semibold text-gray-900 mb-2">
          {{ feature.title }}
        </h4>
        <p class="text-gray-600">{{ feature.desc }}</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { CheckCircle, Zap, Shield } from 'lucide-vue-next'

const features = [
  {
    title: 'Easy to Use',
    desc: 'Intuitive interface designed for maximum productivity',
    icon: CheckCircle,
    bgClass: 'bg-green-50 group-hover:bg-green-100',
    iconClass: 'text-green-500'
  },
  {
    title: 'Lightning Fast',
    desc: 'Real-time updates and instant synchronization',
    icon: Zap,
    bgClass: 'bg-yellow-50 group-hover:bg-yellow-100',
    iconClass: 'text-yellow-600'
  },
  {
    title: 'Secure & Reliable',
    desc: 'Enterprise-grade security for your data',
    icon: Shield,
    bgClass: 'bg-blue-50 group-hover:bg-blue-100',
    iconClass: 'text-blue-500'
  }
]
</script>