<template>
  <Carousel 
    :items-to-show="1" 
    :wrap-around="true" 
    :autoplay="5000"
    v-model:currentSlide="currentSlide"
    class=" mt-4 lg:mt-16 relative px-6 md:px-8 max-w-[1500px]  mx-auto"
  >
    <Slide v-for="(slide, index) in slides" :key="index">
      <div class="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden ">
        <!-- Text Section (Left) -->
        <div  class="pb-4 md:w-1/2 flex flex-col justify-center ">
          <!-- Combine title and title2 into one heading -->
          <h2 class="text-4xl font-bold mb-4 leading-tight">
            {{ slide.title }}<br />
            {{ slide.title2 }}
          </h2>

          <!-- Paragraphs -->
          <p class="text-gray-600 mb-4 break-words whitespace-normal">
            {{ slide.description }}
          </p>
          <p class="text-gray-600 mb-4">
            {{ slide.description2 }}
          </p>

          <!-- Buttons with horizontal spacing -->
          <div class="flex gap-6">
            <button class="button btn-secondary">
              {{ slide.buttonText }}
            </button>
            <button class="button btn-tertiary">
              {{ slide.buttonText2 }}
            </button>
          </div>
        </div>

         <!-- Image Section (Right) -->
        <div class="md:w-1/2 flex items-center justify-center py-6">
          <img v-if="index == 0" src="/public/Group_1.png" />
          <img v-if="index == 1" src="/public/Group_2.png" />
          <img v-if="index == 2" src="/public/Group_3.png" />
          <img v-if="index == 3" src="/public/Group_4.png" />
        </div>
      </div>
    </Slide>

    <!-- Custom Navigation Dots -->
    <template #addons="{ goToSlide, currentSlide }">
      <div class=" md:flex absolute -bottom-5 md:right-[43%] right-[30%] -translate-x-1/2 translate-y-[15px] z-9 w-30 flex justify-center items-center h-6  rounded-xl">
        <div class="flex space-x-2">
          <button
            v-for="(slide, i) in slides"
            :key="i"
            @click="goToSlide(i)"
            :class="[
              'w-3 h-3 rounded-full transition-colors duration-300',
              currentSlide === i ? 'bg-red-600' : 'bg-gray-300'
            ]"
          ></button>
        </div>
      </div>
    </template>

  </Carousel>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const currentSlide = ref(0)

const slides = [
  {
    title: "Tulipe Ushuru",
    title2: "Tujitegemee.",
    description: "The convenient way for taxpayer to file their tax returns, make tax payments, and access various tax-related services online.",
    description2: "Kenya revenue Authority online services. Apply and pay for the services conviniently through your eCitizen account.",
    buttonText: "Sign In",
    buttonText2: "Learn More",
    image: "/images/kraprofiles.png",
    alt: "KRA Profiles"
  },
  {
    title: "Property Management",
    title2: "with eRITS",
    description: "Enjoy a hassle-free experience with our simplified registration process. Register your rental properties, file and pay your rental income taxes seamlessly while enjoying out bundled property management system",
    buttonText: "Get Started on eRITS",
    buttonText2: "Learn More",
    image: "/images/erits.png",
    alt: "eRITS"
  },
  {
    title: "Invoicing on eTIMS",
    description: "Transform the way you manage your business semlessly with ETIMS E-Invoicing. ETIMS E-Invoicing is your comprehensive solution to streamline and optimizethe invoicing workflow, allowing you to focus on what matters most.",
    buttonText: "Get Started on eTIMS",
    buttonText2: "Learn More",
    image: "/images/etims.png",
    alt: "Adventure Scene"
  },
  {
    title: "Customs",
    description: "Access Customs services seamlessly from the simplified solutions portal today. Apply to become an authourised exporter and apply for COOs and more directly from your KRA profile",
    buttonText: "Get Started on eRITS",
    buttonText2: "Learn More",
    image: "/images/Customs.png",
    alt: "eRITS"
  }
]
</script>

<style scoped>
/* Optional: Customize further if needed */
</style>
