<template>
    <span class="catalog__price">
      {{ price }} ₽
    </span>
</template>

<script>

export default {
  props: ['price'],
  name: 'ProductPrice',
};
</script>

<style scoped>

</style>
