<script setup>
  const { data } = await useFetch('/api/hello?name=Hassen', {
    method: 'POST',
    body: {
      age: 39,
    }
  });
</script>

<template>
  <div>
    <h1>Hello World!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tempora amet aspernatur nam similique voluptatum cumque, provident optio aliquam voluptatibus qui, earum id nobis laboriosam commodi error magnam totam iste.</p>
    <div>{{ data }}</div>
  </div>
</template>

<style scoped>
</style>
