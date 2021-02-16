<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
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
<script>
import homeLayout from "@/layout/home-layout";
import mainLayout from "@/layout/main-layout";

export default {
  computed: {
    layout() {
      console.log(this.$route.meta);
      return (this.$route.meta.layout || "home") + "-layout";
    }
  },
  components: {
    homeLayout,
    mainLayout
  }
};
</script>
