// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    'nuxt-gtag',
    'nuxt-purgecss',
    'nuxt-link-checker',
    'nuxt-delay-hydration',
  ],
  devtools: { enabled: true },
  purgecss: {
    enabled: false, // Always enable purgecss
    // safelist: ['my-class'], // Add my-class token to the safelist (e.g. .my-class)
  },
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === 'development'
  },
  gtag: {
    // id: 'G-XXXXXXXXXX',
    // initialConsent: false
  }
})
