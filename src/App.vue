<template>
  <div>
    <HeaderMain></HeaderMain>
    <router-view />
    <FooterMain></FooterMain>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import HeaderMain from './components/HeaderMain.vue';
import FooterMain from './components/FooterMain.vue';

export default {
  name: 'App',
  components: { HeaderMain, FooterMain },
  created() {
    this.loadCart();
  },
  methods: {
    ...mapActions(['loadCart']),
  },
};
</script>
