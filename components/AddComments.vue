<script setup lang="ts">
const comments = ref(true)
</script>
<template>
  <div>
    <NuxtLink v-if="comments" class="px-4 pb-4 flex justify-between cursor-pointer">
      afficher les {{ comments.length }}x commentaires
    </NuxtLink>

    <div class="px-4 pb-4 flex justify-between">
      <div>
        <input type="text" placeholder="Ajouter un commentaire..." />
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
