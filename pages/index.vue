<template>

  
  <Header />
  <Banner />
  <Footer />

  <button
      @click="scrollToTop"
      class="fixed bottom-20 right-6 w-[57px] h-[57px] bg-[#D90011] rounded-full flex items-center justify-center shadow-lg hover:bg-red-300 transition duration-300 z-50"
    >
      <!-- Up arrow icon using SVG -->
      <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.75 11.125L10.5 1.875L1.25 11.125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </button>


</template>

<script setup>

import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

</script>