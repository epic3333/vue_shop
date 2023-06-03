<template>
    <ul class="colors colors--black">
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" value="#73B6EA" v-model="color">
          <span class="colors__value" style="background-color: #73B6EA;">
                    </span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" value="#8BE000" v-model="color">
          <span class="colors__value" style="background-color: #8BE000;">
                    </span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" value="#222" v-model="color">
          <span class="colors__value" style="background-color: #222;">
                    </span>
        </label>
      </li>
    </ul>
</template>

<script>

export default {
  name: 'ProductColor',
  data() {
    return {
      color: '#73B6EA',
    };
  },
};
</script>

<style scoped>

</style>
