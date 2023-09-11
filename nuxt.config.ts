// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/fonts.css','~/assets/css/main.css'],
  loading: '~/components/loader/Loader.vue',
  ssr: false,
  imports: {
      autoImport: false
  },
  runtimeConfig: {
    directus: {
      url: 'http://109.195.74.198:8055',
    },
    public: {
      apiSecret: 'XVW8VWNB0eYYLj8CSPh2aTWeEl9dFaZQ',
    }
  },
  routeRules: {
    '/': {
      prerender: true,
    }
  },
  components: false,
  modules: [
    ['@nuxt/image', {
      inject: true,
      directus: {
        baseURL: 'http://109.195.74.198:8055/assets/'
      }
    }],
    ['nuxt-svgo', {
      autoImportPath: './assets/icons/'
    }],
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    ['nuxt-directus', {
      url: 'http://109.195.74.198:8055',
    }],
    ['@vee-validate/nuxt', {
      autoImports: true,
      componentNames: {
        Form: 'VeeForm',
        Field: 'VeeField',
        FieldArray: 'VeeFieldArray',
        ErrorMessage: 'VeeErrorMessage',
      },
    }],
  ],
  vite: {
    server: {
      proxy: {
        '/assets': 'http://109.195.74.198:8055',
        '/api': 'http://109.195.74.198:8055',
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
