<template>
    <ul class="colors colors--black">
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" :value="colorId">
          <span class="colors__value" :style="'background-color:' + colorVal">
                    </span>
        </label>
      </li>
    </ul>
</template>

<script>

export default {
  name: 'ProductColor',
  props: ['colorId', 'colorVal'],
};
</script>

<style scoped>

</style>
