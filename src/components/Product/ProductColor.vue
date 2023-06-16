<template>
    <ul class="colors colors--black">
      <li class="colors__item">
        <label class="colors__label" v-for="(itemColor, index) in colorVal" :key="index">
          <input class="colors__radio sr-only" type="radio" :value="itemColor">
          <span class="colors__value" :style="'background-color:' + itemColor">
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
