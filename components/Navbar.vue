import type { NuxtLink } from '#build/components'; import type { NuxtLink } from
'#build/components';
<template>
  <div class="navContainer">
    <ul class="navUlRoute">
      <li><NuxtLink to="/">Accueil</NuxtLink></li>
      <li><NuxtLink to="/about">A propos</NuxtLink></li>
      <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
    </ul>
  </div>
</template>
