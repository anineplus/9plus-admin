// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Use new Nuxt 4 directory structure
  future: {
    compatibilityVersion: 4,
  },

  // Nuxt 4 uses app/ directory by default
  // All pages, layouts, components, composables, plugins go into app/

  devtools: { enabled: true },

  // CSS configuration
  css: ['@vben/styles', '@vben/styles/antd'],

  // Modules
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/tailwindcss'],

  // Build configuration
  build: {
    transpile: ['ant-design-vue', '@vben'],
  },

  // Vite configuration
  vite: {
    server: {
      proxy: {
        '/api': {
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          target: 'http://localhost:5320/api',
          ws: true,
        },
      },
    },
  },

  // App configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Vben Admin',
      meta: [
        {
          name: 'description',
          content: 'A Modern Back-end Management System',
        },
        { name: 'keywords', content: 'Vben Admin Vue3 Nuxt4' },
        { name: 'author', content: 'Vben' },
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: true,
  },

  // Runtime config
  runtimeConfig: {
    public: {
      appTitle: process.env.VITE_APP_TITLE || 'Vben Admin',
      appVersion: process.env.VITE_APP_VERSION || '1.0.0',
      appNamespace: process.env.VITE_APP_NAMESPACE || 'vben-admin',
    },
  },

  // SSR configuration - disable for admin panel (SPA mode)
  ssr: false,

  compatibilityDate: '2024-12-11',
});
