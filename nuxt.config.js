export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "ZeBoard",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyAQyZurKrQTImKcaQWZEGQWI8rgWHsJnWA",
          authDomain: "zeboard-ishutka.firebaseapp.com",
          projectId: "zeboard-ishutka",
          storageBucket: "zeboard-ishutka.appspot.com",
          messagingSenderId: "163622437343",
          appId: "1:163622437343:web:c83a237984d88321fec46a",
          measurementId: "G-FXMYG6W6EW"
        },
        onFirebaseHosting:true,
        services: {
          analytics: true,
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  target:'static'
};
