<template>
    <header class="header">
      <div class="header__wrapper container">
        <router-link class="header__info" :to="{name: 'main'}">Каталог</router-link>

        <a class="header__logo" href="#">
          <img src="img/svg/logo-tech.svg" alt="Логотип интернет магазина Технозавррр" width="190" height="33">
        </a>

        <a class="header__tel" href="tel:8 800 600 90 09">
          8 800 600 90 09
        </a>

        <CartIndicator></CartIndicator>
      </div>
    </header>
</template>

<script>
import CartIndicator from './CartIndicator.vue';

export default {
  name: 'HeaderMain',
  components: { CartIndicator },
};
</script>

<style scoped>

</style>
