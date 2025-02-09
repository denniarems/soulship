import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: [
    ['@nuxtjs/tailwindcss'],
  ],
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
  ],
  css: ['~/assets/css/tailwind.css'],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  colorMode: {
    classSuffix: '',
  },
  // https://github.com/nuxt/framework/issues/6204#issuecomment-1201398080
  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        // Workaround for netlify issue
        // https://github.com/nuxt/framework/issues/6204
        config.build.rollupOptions.output.inlineDynamicImports = true
      }
    },
  },
})
