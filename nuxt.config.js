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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap',
			},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyBvwHOl6dMaHLEVjGTJAUvPPKbxqooN1jY",
          authDomain: "ishutka-zeboard.firebaseapp.com",
          projectId: "ishutka-zeboard",
          storageBucket: "ishutka-zeboard.appspot.com",
          messagingSenderId: "1201843794",
          appId: "1:1201843794:web:a9042ab1e86b8eeb7b398b",
          measurementId: "G-MZW61WP0F9"
        },
        onFirebaseHosting:true,
        services: {
          analytics: true,
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //TODO: style's order adjustment
    transpile: ['vuetify'],
  },

  target:'static'
}
