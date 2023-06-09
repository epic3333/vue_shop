<template>
    <router-link class="catalog__pic" :to="{name: 'product', params: {id: productId}}">
      <img :src="image" :alt="title">
    </router-link>
</template>

<script>

export default {
  props: ['image', 'title', 'productId'],
  name: 'ProductImage',
};
</script>

<style scoped>

</style>
