<template>
    <h3 class="catalog__title">
      <a href="#">
        {{ title }}
      </a>
    </h3>
</template>

<script>

export default {
  props: ['title'],
  name: 'ProductTitle',
};
</script>

<style scoped>

</style>
