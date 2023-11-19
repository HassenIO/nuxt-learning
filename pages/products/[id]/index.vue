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
  <Head>
    <Title>Nuxt Shopping - {{ product.title }}</Title>
    <Meta name="description" :content="product.description" />
  </Head>

  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<style scoped></style>
