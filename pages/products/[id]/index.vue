<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params;

  const { data: product } = await useFetch(`http://fakestoreapi.com/products/${id}`);
</script>

<style scoped></style>
