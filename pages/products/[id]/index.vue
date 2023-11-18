<template>
  <div>
    <h1>This is the page for product {{ id }}</h1>
  </div>
</template>

<script setup>
  const { id } = useRoute().params;

  definePageMeta({
    layout: 'products',
  });
</script>

<style scoped></style>
