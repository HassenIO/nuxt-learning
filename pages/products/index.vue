<template>
  <div>
    <h1>This is the products page</h1>
    <ul>
      <li v-for="product in products" key="product.id">
        <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const { data: products } = await useFetch('http://fakestoreapi.com/products');
</script>

<style scoped></style>
