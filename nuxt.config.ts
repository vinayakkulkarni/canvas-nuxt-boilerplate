export default defineNuxtConfig({
  app: {
    head: {
      title: 'DSCVR Canvas Boilerplate | Nuxt',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'format-detection',
          content: 'telephone=no',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'DSCVR Canvas Boilerplate | Nuxt',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'DSCVR Canvas example boilerplate built with Nuxt 4',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'DSCVR Canvas Boilerplate | Nuxt.',
        },
        {
          hid: 'og:description',
          property: 'og:title',
          content: 'DSCVR Canvas example boilerplate built with Nuxt 4',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'DSCVR Canvas Boilerplate | Nuxt',
        },
        {
          hid: 'twitter:description',
          property: 'og:site_name',
          content: 'DSCVR Canvas example boilerplate built with Nuxt 4',
        },
        {
          property: 'dscvr:canvas:version',
          content: 'vNext',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
      noscript: [
        {
          innerHTML: 'This application requires JavaScript.',
        },
      ],
    },
  },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/global.css'],
  devtools: { enabled: true },
  experimental: {
    renderJsonPayloads: true,
  },
  future: { compatibilityVersion: 4 },
  modules: [
    // https://nuxt.com/blog/eslint-module
    '@nuxt/eslint',
    // https://vueuse.org/guide/#nuxt
    '@vueuse/nuxt',
    // https://github.com/nuxt-modules/plausible#setup
    '@nuxtjs/plausible',
    // https://unocss.dev/integrations/nuxt
    '@unocss/nuxt',
    // https://nuxt.com/modules/fontaine
    '@nuxtjs/fontaine',
    // Canvas
    // Local module(s)
    '@vinayakkulkarni/canvas-module',
  ],
  plausible: {
    hashMode: false,
    trackLocalhost: false,
    domain: 'canvas-nuxt-boilerplate.nuxt.dev',
    apiHost: 'https://analytics.geoql.in',
    autoPageviews: true,
    autoOutboundTracking: true,
  },
  unocss: {
    attributify: true,
    icons: true,
    components: false,
    shortcuts: [],
  },
  vite: {
    optimizeDeps: {
      include: ['eventemitter3'],
    },
  },
});
