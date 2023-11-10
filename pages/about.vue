<script setup lang="ts">
useSeoMeta({
  title: "A propos",
  description: "[description]",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

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
});

const { data: scizor } = await useFetch("/api/charizard");
</script>
<template>
  <Navbar />
  <div class="mainContent">
    <h2 class="mainTitle">This is the about page</h2>
    <ul>
      <li><img :src="scizor.sprite" alt="" /></li>
      <li>{{ scizor.id }} : {{ scizor.name }}</li>
    </ul>
  </div>
</template>
