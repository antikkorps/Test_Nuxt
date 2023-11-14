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
  <div class="pb-14">
    <Navbar />
    <Hero />

    <Tats />
  </div>
</template>

<style scoped>
body {
  background-color: #f9fafb;
}
</style>
