import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','aos/dist/aos.css' ], // Include AOS CSS globally
  plugins: ['~/plugins/aos.client.ts'],
  vite: {
    plugins: [
      tailwindcss(), // TailwindCSS plugin for Vite
    ],
  },
});