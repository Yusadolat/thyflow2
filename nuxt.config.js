export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/assets/plugins/mediabox/mediabox.min.css" },
      { rel: "stylesheet", href: "/assets/css/custom.css" }
    ],
    script: [{ src: "/assets/plugins/mediabox/mediabox.min.js", body: true }],
    __dangerouslyDisableSanitizers: ["script"]
  },
  generate: {
    routes: function() {
      const fs = require("fs");
      return fs.readdirSync("./assets/content/blog").map(file => {
        return {
          route: `/blog/${file.slice(2, -5)}`,
          payload: require(`./assets/content/blog/${file}`)
        };
      });
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/common.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/VueTyper.js", ssr: false },
    { src: "~/plugins/link-resolver.js" },
    { src: "~/plugins/vue-slider.js", ssr: false },
    { src: "~/plugins/vue-scrollto.js", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/markdownit",
    "@aceforth/nuxt-optimized-images"
  ],
  markdownit: {
    injected: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    ["@nuxtjs/markdownit"],
    ["vue-scrollto/nuxt", { duration: 300 }],
    "@nuxtjs/tailwindcss"
  ],
  markdownit: {
    injected: true
  },
  optimizedImages: {
    optimizeImages: true
  },
  /*
   ** Build configuration
   */ build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    }
  }
};
