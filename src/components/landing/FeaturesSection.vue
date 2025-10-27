<template>
  <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="text-center mb-12">
      <h3 class="text-3xl font-bold text-neutral-900 mb-4">
        Everything You Need to Manage Tickets
      </h3>
      <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
        Powerful features designed for teams of all sizes
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(feature, idx) in features"
        :key="idx"
        class="card-atlantic p-6 hover:shadow-atlantic-lg transition-all group bg-surface border border-border/40 rounded-xl"
      >
        <div
          :class="[
            'w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors',
            feature.bgClass
          ]"
        >
          <component
            :is="feature.icon"
            :class="['transition-colors', feature.iconClass]"
            :size="24"
          />
        </div>
        <h4 class="text-xl font-semibold text-neutral-900 mb-2">
          {{ feature.title }}
        </h4>
        <p class="text-neutral-600">{{ feature.desc }}</p>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="relative py-16">
      <div class="absolute top-0 right-20 w-24 h-24 bg-primary-200 rounded-full opacity-30"></div>
      <div class="absolute bottom-0 left-20 w-32 h-32 bg-accent-200 rounded-full opacity-30"></div>
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
    bgClass: 'bg-success-50 group-hover:bg-success-100',
    iconClass: 'text-success-500'
  },
  {
    title: 'Lightning Fast',
    desc: 'Real-time updates and instant synchronization',
    icon: Zap,
    bgClass: 'bg-warning-50 group-hover:bg-warning-100',
    iconClass: 'text-warning-600'
  },
  {
    title: 'Secure & Reliable',
    desc: 'Enterprise-grade security for your data',
    icon: Shield,
    bgClass: 'bg-primary-50 group-hover:bg-primary-100',
    iconClass: 'text-primary-500'
  }
]
</script>
