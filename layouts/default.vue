<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <a href="/" class="font-bold">Nuxt Dojo</a>
        <ul class="flex gap-4">
          <li><NuxtLink to="/" class="btn-nav">Home</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn-nav">All products</NuxtLink></li>
          <li><NuxtLink to="/products/123" class="btn-nav">Product 123</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    @apply bg-blue-500 text-white text-sm py-2 px-4 rounded;
  }
</style>
