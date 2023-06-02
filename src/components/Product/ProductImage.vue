<template>
    <a class="catalog__pic" href="#">
      <img :src="image" :alt="title">
    </a>
</template>

<script>

export default {
  props: ['image', 'title'],
  name: 'ProductImage',
};
</script>

<style scoped>

</style>
