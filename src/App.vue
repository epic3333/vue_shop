<template>
  <div>
    <HeaderMain></HeaderMain>
    <router-view />
    <FooterMain></FooterMain>
  </div>
</template>

<script>
import HeaderMain from './components/HeaderMain.vue';
import FooterMain from './components/FooterMain.vue';

export default {
  name: 'App',
  components: { HeaderMain, FooterMain },
  created() {
    this.$store.dispatch('loadCart');
  },
};
</script>
