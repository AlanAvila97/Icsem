// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-gtag',
    'nuxt-icon',
    'nuxt-purgecss',
    'nuxt-og-image',
    'nuxt-schema-org',
    'nuxt-link-checker',
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
    'nuxt-delay-hydration',
    '@pinia/nuxt',
    '@nuxt/image',
    '@unlazy/nuxt',
    '@nuxtjs/web-vitals',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts'
    
  ],
  extends: [
    'nuxt-seo-kit'
  ],
  css:[
    '@/assets/css/main.css',
    '@/assets/css/footer.css',
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination'
  ],
  devtools: { 
    enabled: true 
  },
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
  },
  googleFonts: {
    // Options 
  },
  webVitals: {
    // provider: '', // auto detectd
    debug: true,
    disabled: false
  },
})