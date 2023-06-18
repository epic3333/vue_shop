<template>
  <div>
    <HeaderMain></HeaderMain>
    <router-view />
    <FooterMain></FooterMain>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import HeaderMain from './components/HeaderMain.vue';
import FooterMain from './components/FooterMain.vue';

export default {
  name: 'App',
  components: { HeaderMain, FooterMain },
  created() {
    const userAccessKey = localStorage.getItem('userAccessKey');
    if (userAccessKey) {
      this.updateUserAccessKey(userAccessKey);
    }
    this.loadCart();
  },
  methods: {
    ...mapActions(['loadCart']),
    ...mapMutations(['updateUserAccessKey']),
  },
};
</script>
