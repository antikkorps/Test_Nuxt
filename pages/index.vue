<script setup lang="ts">
const route = useRoute()
useSeoMeta({
  title: "[title]",
  description: "[description]",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
})

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
})
</script>

<template>
  <div>
    <Navbar />
    <div class="mainContent bg-green-700">
      <h2 class="mainTitle">Bienvenue sur le réseau social</h2>
      <h3 class="mainTitle">Dédié au tatouage</h3>
      <p>Current route: {{ route.path }}</p>

      <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
        >Learn more about Nuxt Routing</a
      >
      <div class="flex flex-row w-full">
        <div
          class="bg-stone-700 basis-1/3 hover:basis-1/2 hover:transition-all hover:ease-linear transition-all ease-linear py-5 shadow-xl"
        >
          flex on hover
        </div>
      </div>
      <Tats />
    </div>
  </div>
</template>

<style>
body {
  background-color: blanchedalmond;
}
</style>
