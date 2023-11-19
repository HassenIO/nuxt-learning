// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxh Shopping",
      meta: [
        {
          name: "description",
          content: "Nuxt training project",
        },
      ],
    },
  },
});
