<template>
    <span class="catalog__price">
      {{ price | numberFormat }} ₽
    </span>
</template>

<script>
import numberFormat from '../../helpers/numberFormat';

export default {
  props: ['price'],
  name: 'ProductPrice',
  filters: {
    numberFormat,
  },
};
</script>

<style scoped>

</style>
