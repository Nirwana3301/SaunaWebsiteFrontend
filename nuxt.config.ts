// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  pages: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/apollo",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
    "nuxt-gtag",
  ],
  extends: ["nuxt-seo-kit"],
  css: ["assets/index.css"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: `https://strapi.mbmobilesauna.de/graphql`,
        browserHttpEndpoint: `https://strapi.mbmobilesauna.de/graphql`,
        connectToDevTools: false,
      },
    },
  },
  gtag: {
    id: "G-4895GTEF9C",
    initialConsent: false,
  },
});
