// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // typescript: {
  //   strict: true
  // },
  css: ['~/assets/css/main.css', '~/assets/css/bigcard.css'],
  modules: ['@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
