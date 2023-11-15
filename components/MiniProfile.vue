<template>
  <div class="flex md:absolute top-40 right-60">
    <div class="flex flex-col">
      <div class="flex w-100">
        <h3 class="mb-2 font-bold text-xl text-gray-500">Suggestion pour vous</h3>
        <NuxtLink to="" class="cursor-pointer">Voir tout</NuxtLink>
      </div>

      <div class="flex">
        <div>
          <img
            class="h-10 w-10 mx-4 rounded-full ring-4 ring-purple-500"
            src="https://picsum.photos/200"
            alt=""
          />
        </div>
        <div>
          <div>
            <div>
              <p class="font-bold">Username</p>
              <p>Suivi(e) par Username</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
