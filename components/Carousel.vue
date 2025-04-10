<template>
  <div class="relative overflow-hidden">
    <div
      class="w-full mt-16 flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="min-w-full flex flex-col-reverse lg:flex-row  justify-between items-center "
      >
        <!-- Left Text Section -->
        <div class="md:pt-20 md:pl-24 mx-auto w-[96%] md:w-auto md:mx-0 md:max-w-[570px]">
          <h2 class="text-3xl md:text-5xl font-semibold">{{ slide.title }}</h2>
          <p class="text-[#475467] text-lg mt-8" v-html="slide.description"></p>
          <div class="space-x-4 flex mt-8 flex-wrap justify-center md:justify-start">
            <button class="button btn-secondary">
              {{ slide.button1description }}
            </button>
            <button class="button btn-tertiary">
              {{ slide.button2description }}
            </button>
          </div>
        </div>

        <!-- Right Image Section -->
        <div class="md:mr-10 mt-8 md:mt-0">
          <img :src="`../${slide.image}`" class="w-full object-cover" />
        </div>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div
      class="absolute top-[10%] md:top-[65%] left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <button
        v-for="(dot, index) in slides"
        :key="index"
        @click="currentSlide = index"
        :class="[
          'w-3 h-3 rounded-full transition-colors duration-300',
          currentSlide === index ? 'bg-[#E36F04]' : 'bg-[#D9D9D9]',
        ]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted, onBeforeUnmount } from "vue";

let interval = null;

onMounted(() => {
  interval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
  }, 5000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
const currentSlide = ref(0);

const slides = [
  {
    title: "Tulipe Ushuru Tujitegemee.",
    description:
      "The convenient way for taxpayers to file their tax returns, make tax payments, and access various tax-related services online. <br><br> Kenya revenue authority online services. Apply and pay for the services conveniently through your ecitizen account",
    image: "/public/Group_1.png",
    button1description: "Sign in",
    button2description: " Learn more",
  },
  {
    title: "Property Management with eRITS",
    description:
      "Enjoy a hassle-free experience with our simplified registration process. Register your rental properties, file and pay your rental income taxes seamlessly while enjoying our bundled property management system ",
    image: "/public/Group_2.png",
    button1description: "Get Started on eRITS",
    button2description: " Learn more",
  },
  {
    title: "Invoicing on eTIMS",
    description:
      "Transform the way you manage your business seamlessly with ETIMS E-Invoicing. ETIMS E-Invoicing is your comprehensive solution to streamline and optimize the invoicing workflow, allowing you to focus on what matters most.",
    image: "/public/Group_1.png",
    button1description: "Get Started on eTIMS",
    button2description: " Learn more",
  },
  {
    title: "Customs",
    description:
      "Access Customs services seamlessly from the simplified solutions portal today. Apply to become an authorised exporter and apply for COOs and more directly from your KRA profile.",
    image: "/public/Group_4.png",
    button1description: "Sign in",
    button2description: " Learn more",
  },
];
</script>

<style scoped>
/* You can add animations or styling as needed */
</style>
