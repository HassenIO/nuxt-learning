<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/products">Nuxt Dojo Merch</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">All products</NuxtLink></li>
          <li><NuxtLink to="/products/123">Product 123</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #0090ff;
  }
</style>
