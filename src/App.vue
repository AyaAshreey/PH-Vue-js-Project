<template>
  <!-- <app-layout :dir="direction"> -->
  <app-layout>
    <router-view />
  </app-layout>

</template>


<script>
import AppLayout from "./components/global/AppLayout.vue";
// import { mapGetters } from 'vuex';

export default {
  components: {
    AppLayout,

  },
  // computed: {
  //   ...mapGetters(['direction']),
  // }
};

</script>

<style lang="scss">
@font-face {
  font-family: "Montserrat Arabic";
  src: url(./assets/fonts/Montserrat-Arabic-Regular.ttf);
}

#app {
  // font-family: 'Montserrat Arabic', sans-serif;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// body[dir="rtl"] {
//   direction: rtl;
//   text-align: right;
// }

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
