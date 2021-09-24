import * as FontAwesome from "./plugins/fontawesome";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Murasaki",
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "../assets/css/style.scss" }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/vue-mavon-editor", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Noto+Serif+JP": true,
          "Noto+Serif+TC": true
        },
        display: "block",
        download: true,
        inject: true
      }
    ],
    ["@nuxtjs/fontawesome", { component: "fontAwesome", suffix: true }]
  ],
  fontawesome: {
    icons: {
      solid: FontAwesome.solid,
      regular: FontAwesome.regular,
      brands: FontAwesome.brands
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [`@nuxtjs/style-resources`],
  styleResources: { scss: ["~/assets/css/mixin.scss"] },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
