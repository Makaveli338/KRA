<template>
    <div data-aos="zoom-in" class="mt-11 ">
        <h1 class=" text-[#111827] text-4xl font-semibold text-center"> KRA Checkers</h1>
        <p class=" text-[#475467] text-[22px] font-medium pt-5 pb-6 text-center"> Select Checker below</p>
    <div class=" grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] max-w-[1500px]   mx-auto">   

  <NuxtLink
    v-for="(checker, index) in checkers"
    :key="index"
    :to="checker.link"
    class="border border-[#EAECF0] hover:bg-gray-200 rounded-xl py-3 px-4 flex justify-between duration-200"
  >
    <div class=" w-[90%]">
      <h1 class="text-[#344054] font-semibold text-xl">
        {{ checker.title }}
      </h1>
      <p v-if="checker.description" class="text-[#475467]">
        {{ checker.description }}
      </p>
    </div>
    <svg
      class="self-center"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.66675 9.99984H16.3334M16.3334 9.99984L10.5001 4.1665M16.3334 9.99984L10.5001 15.8332"
        stroke="#E36F04"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </NuxtLink>
</div>
</div>

</template>
<script setup lang="ts">
const checkers = [
  {
    title: "Staff Checker",
    description: "Verify agents that work KRA",
    link: "/#",
  },
  {
    title: "Application Status Checker",
    description: "Check your application status",
    link: "/#",
  },
  {
    title: "Pin Checker",
    description: "Verify KRA pin details",
    link: "/#",
  },
  {
    title: "Tax Compliance Certificate /Exemption Certificate/Excise License/Certificate Checker",
    description: "",
    link: "/#",
  },
  {
    title: "Withholding Tax Agent Checker",
    description: "Verify Withholding Agent.",
    link: "/#",
  },
  {
    title: "Control Unit checker",
    description: "Verify Control Unit Serial Number",
    link: "/#",
  },
  {
    title: "Invoice Number checker",
    description: "Validate Control Unit Invoice Number.",
    link: "/#",
  },
  {
    title: "Payment Registration Number (PRN) Checker",
    description: "Validate PRN number",
    link: "#",
  },
];
</script>
