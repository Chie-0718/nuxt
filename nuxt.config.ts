// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt'
  ],
  nitro: {
    firebase: {
      gen:2
    }
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/variable.css',
    // '~/assets/css/reset.css',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
