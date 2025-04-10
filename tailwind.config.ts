// tailwind.config.ts
export default {
    content: ['./components/**/*.{vue,js}', './pages/**/*.{vue,js}', './app.vue'],
    theme: {
      extend: {
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
        }
      },
    },
    plugins: [],
  } 