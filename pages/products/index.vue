<script setup>
  const { data: products } = await useFetch('https://fakestoreapi.com/products');

  useHead({
    title: "Nuxt Shopping - All Products",
  })
</script>

<template>
  <div>
    <h1>This is the products page</h1>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
