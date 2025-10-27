<template>
  <div class="min-h-screen flex flex-col">
    <Navigation />
    
    <main class="flex-1">
      <div class="relative bg-blue-600">
        <div class="pb-12"> 
          <HeroSection />
        </div>
        <div class="absolute bottom-0 left-0 w-full text-white">
          <WaveSVG />
        </div>
      </div>
      
      <div class="bg-white py-12">
        <FeaturesSection />
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navigation from '../layout/Navigation.vue'
import Footer from '../layout/Footer.vue'
import HeroSection from './HeroSection.vue'
import FeaturesSection from './FeaturesSection.vue'
import WaveSVG from './WaveBackground.vue' 
</script>