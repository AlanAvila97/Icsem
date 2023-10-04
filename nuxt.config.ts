// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  "~~": "/<rootDir>",
  "@@": "/<rootDir>",
  "~": "/<rootDir>",
  "@": "/<rootDir>",
  "assets": "/<rootDir>/assets",
  app: {
    head: {
        htmlAttrs: {
            lang: 'es-mx'
        },
        charset: 'utf-8',
        title: 'Instrumentación Controles y Servicios EM',
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: '' },
            { name: 'keywords', content: '' },
            { name: 'author', content: 'Instrumentación Controles y Servicios EM' },
            { name: 'twitter:card', content: 'summary_large_imag' },
            // { name: 'twitter:site', content: '@CanalOnceTV' },
            { name: 'msapplication-TileColor', content: '#ffffff' },
            { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
            { name: 'theme-color', content: '#ffffff' },
            { property: 'og:locale', content: 'es_MX' },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: 'Instrumentación Controles y Servicios EM' },
            // { property: 'og:description', content: 'Canal Once inició sus transmisiones el 2 de marzo 1959, lo que la convierte en la primera televisora pública, educativa y cultural en México, y pionera en América Latina. A lo largo de su historia es reconocida por sus contenidos, que aportan conocimiento, información, cultura y entretenimiento.' },
            // { property: 'og:url', content: 'https://canalonce.mx' },
            { property: 'og:site_name', content: 'Instrumentación Controles y Servicios EM' },
            // { property: 'og:image', content: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/screeen_logo_once.jpg' },
            { property: 'og:image:width', content: '1346' },
            { property: 'og:image:height', content: '1346' },
            { property: 'og:image:type', content: 'image/jpeg' },
            { property: 'og:image:type', content: 'image/jpeg' },
        ],
        link: [
            // { rel: 'shortlink', href: 'https://canalonce.mx/'},
            // { rel: 'canonical', href: 'https://canalonce.mx'},
            { rel: 'dns-prefetch', href: '//www.google-analytics.com'},
            // { rel: 'apple-touch-icon', sizes: '57x57', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-57x57.png'},
            // { rel: 'apple-touch-icon', sizes: '60x60', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-60x60.png'},
            // { rel: 'apple-touch-icon', sizes: '72', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-72x72.png'},
            // { rel: 'apple-touch-icon', sizes: '76x76', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-76x76.png'},
            // { rel: 'apple-touch-icon', sizes: '114x144', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-114x114.png'},
            // { rel: 'apple-touch-icon', sizes: '120x120', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-120x120.png'},
            // { rel: 'apple-touch-icon', sizes: '144x144', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-144x144.png'},
            // { rel: 'apple-touch-icon', sizes: '152x152', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-152x152.png'},
            // { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-180x180.png'},
            // { rel: 'icon', sizes: '192x192', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-192x192.png'},
        ],              
        script: [
          { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', tagPosition: 'bodyClose' },
        ],
        noscript: [
        ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  modules: [
    'nuxt-gtag', 
    'nuxt-icon', 
    'nuxt-purgecss', 
    'nuxt-og-image',
    'nuxt-schema-org',
    'nuxt-link-checker',
    // 'nuxt-simple-robots',
    'nuxt-delay-hydration', 
    '@pinia/nuxt', 
    '@nuxt/image', 
    '@unlazy/nuxt', 
    '@nuxtjs/web-vitals', 
    '@nuxtjs/color-mode', 
    '@nuxtjs/google-fonts', 
    // '@nuxtjs/html-validator', 
    '@nuxtjs/partytown',
  ],
  ssr: true,
  extends: [
    'nuxt-seo-kit'
  ],
  css:[
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/main.css',
    '@/assets/css/navbar.css',
    '@/assets/css/footer.css',
    '@/assets/css/global.css',
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
  ],
  devtools: { 
    enabled: true 
  },
  partytown: {
    forward: ['$crisp', '$crisp.push'],
  },
  purgecss: {
    enabled: false, // Always enable purgecss
    // safelist: ['my-class'], // Add my-class token to the safelist (e.g. .my-class)
  },
  delayHydration: {
    debug: process.env.NODE_ENV === 'development',
    mode: 'init',
    replayClick: false,
  },
  image: {
    // domains: ['https://canaloncetv.s3.us-east-1.amazonaws.com'],
    screens: {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1780,
        xxl: 1836,
        '2xl': 1536      
    },
    presets: {
        cover: {
          modifiers: {
            fit: "cover",
            format: "jpg",
            width: 250,
            height: 250,
          },
        },
        blog: {
            modifiers: {
              format: 'webp',
              fit: 'cover',
              quality: '90',
            }
        },
    },
    
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
  // htmlValidator: {
  //   usePrettier: false,
  //   logLevel: 'verbose',
  //   failOnError: false,
  //   options: {
  //     extends: [
  //       'html-validate:document',
  //       'html-validate:recommended',
  //       'html-validate:standard'
  //     ],
  //     rules: {
  //       'svg-focusable': 'off',
  //       'no-unknown-elements': 'error',
  //       // Conflicts or not needed as we use prettier formatting
  //       'void-style': 'off',
  //       'no-trailing-whitespace': 'off',
  //       // Conflict with Nuxt defaults
  //       'require-sri': 'off',
  //       'attribute-boolean-style': 'off',
  //       'doctype-style': 'off',
  //       // Unreasonable rule
  //       'no-inline-style': 'off'
  //     }
  //   }
  // },

})