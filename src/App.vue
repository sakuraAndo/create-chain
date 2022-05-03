<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <router-link to="/">首页</router-link>
    <router-link to="/collection">关于</router-link> -->
    <!-- <router-view/> -->
    <header-bar></header-bar>
    <router-view/>
  </div>
</template>

<script>
import HeaderBar from "./page/HeaderBar";

export default {
  name: "app",
  components: {
    HeaderBar,
  },
  data() {
    return {

    }
  },
  methods: {

  },
};
</script>

<style>

</style>
