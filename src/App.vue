<template>
  <div id="app">
    <Nav></Nav>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/servers">Servers</router-link>|
      <router-link to="/addinstall">Add Install</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Nav
  }
};
</script>

<style lang="scss">
@import "./styles/reset";
@import "./styles/styles";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
