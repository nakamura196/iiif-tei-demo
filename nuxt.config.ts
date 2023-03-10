// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: "/iiif-tei-demo",
      },
    css: ["vuetify/lib/styles/main.sass"],
    build: {
      transpile: ["vuetify"],
    },
})
