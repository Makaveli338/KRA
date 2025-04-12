<template>
    <section class=" grid md:flex md:justify-between justify-center md:gap-0 gap-6  items-center mt-6 mx-auto max-w-[1500px]  w-[90%]  ">
     <!-- Logo -->   

      <img  src="public/logo.svg" alt="">

      <!-- Mid section -->

      <div class=" text-[#475467] font-medium lg:flex gap-10 text-center hidden ">
        <a class=" text-[#D90011] font-semibold" href="#">Home</a>
            <a class="hover:text-[#D90011]" href="#">Services</a>
            <a class="hover:text-[#D90011]" href="#">Checkers</a>
            <a class="hover:text-[#D90011]" href="#">Invoicing</a>
            <a class="hover:text-[#D90011]" href="#">Rental Management</a>
      </div>

      <!-- Buttons -->

      <div class=" flex gap-4 ">
        <button class=" button btn-primary"> Register PIN</button>
        <button class=" button btn-secondary"> 
          <NuxtLink to="https://test.sso.pesaflow.com/en/oauth/authorize?response_type=code&client_id=24f2b7cfa592cf8248345a9766493c7e&redirect_uri=http://localhost:3000/auth/redirect&state=dashboard" external>
            Sign In 
      </NuxtLink>
        </button>
      </div>

    <!-- Hamburger Menu -->
      <div class=" lg:hidden block">
    <!-- Hamburger Icon -->
    <button @click="isOpen = !isOpen"class="p-4 z-50  absolute top-4 right-4">
      <svg
        v-if="!isOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button> 

    <!-- Sidebar Menu -->
    <transition name="fade">
      <nav
        v-if="isOpen"
        class="absolute top-0 left-0 w-full h-full bg-[#BC252B]/50 flex flex-col items-center justify-center space-y-6 text-black text-xl z-40"
      >
        <NuxtLink to="/" @click="isOpen = false">Services</NuxtLink>
        <NuxtLink to="/" @click="isOpen = false">Checkers</NuxtLink>
        <NuxtLink to="/" @click="isOpen = false">Invoicing</NuxtLink>
        <NuxtLink to="/" @click="isOpen = false">Rental Management</NuxtLink>

      </nav>
    </transition>
  </div>



    </section>

</template>

<script>
import { ref, } from 'vue'
const isOpen = ref(false)
export default {
  data() {
    return {
      isOpen: false, 
    };
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>