<script setup lang="ts">
import { ref } from "vue"

const commented = "false"
</script>

<template>
  <div>
    <div v-if="commented">
      <div class="my-5">
        <img
          class="h-16 w-16 mx-4 rounded-full ring-4 ring-purple-500"
          src="https://picsum.photos/200"
          alt=""
        />
      </div>
    </div>
    <div v-else>
      <div class="my-5">
        <img class="h-16 w-16 mx-4 rounded-full" src="https://picsum.photos/200" alt="" />
      </div>
    </div>
  </div>
</template>
