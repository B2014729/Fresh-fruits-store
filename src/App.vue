<template>
  <HeaderComponent :issetToken="issetAuth" />
  <router-view>

  </router-view>
  <FooterComponent />
</template>

<script>
window.scrollTo(0, 0);
import HeaderComponent from '@/components/headerCompnent.vue';
import FooterComponent from '@/components/footterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  name: 'App',

  data() {
    let issetAuth = false;
    if (this.$cookies.get('jwt')) {
      issetAuth = true;
    }
    return {
      issetAuth
    };
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
  color: #000000;
}
</style>
