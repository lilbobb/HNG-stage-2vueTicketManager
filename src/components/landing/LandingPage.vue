<template>
  <div class="min-h-screen bg-surface">
    <Navigation />
    <HeroSection />
    <FeaturesSection />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navigation from '../layout/Navigation.vue'
import Footer from '../layout/Footer.vue'
import HeroSection from './HeroSection.vue'
import FeaturesSection from './FeaturesSection.vue'
</script>
