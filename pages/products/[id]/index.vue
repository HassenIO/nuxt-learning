<template>
  <div>
    <h1>{{ product.title }}</h1>
    <p>For just ${{ product.price }}</p>
    <hr class="my-4"/>
    <div class="flex mt-4">
      <p>{{ product.description }}</p>
      <img :src="product.image" :alt="product.title" class="w-32"/>
    </div>
  </div>
</template>

<script setup>
  const { id } = useRoute().params;

  const { data: product } = await useFetch(`http://fakestoreapi.com/products/${id}`);
</script>

<style scoped></style>
