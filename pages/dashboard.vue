<script setup lang="ts">
useSeoMeta({
  title: "Dashboard",
  description: "This is the dashboard of the application",
  ogTitle: "Dashboard",
  ogDescription: "This is the dashboard of the application",
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

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <Navbar />
  <div class="mainContent">
    <h1 class="mainTitle">Welcome to your dashboard</h1>
  </div>
</template>
