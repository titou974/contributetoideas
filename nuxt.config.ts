// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // typescript: {
  //   strict: true
  // },
  css: ['~/assets/css/main.css', '~/assets/css/bigcard.css'],
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", 'nuxt-swiper'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
