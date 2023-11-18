<script setup>
  const { id } = useRoute().params;

  const { data: product } = await useFetch(`http://fakestoreapi.com/products/${id}`);

  if (!product.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found',
      fatal: true,
    });
  }
</script>

<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<style scoped></style>
