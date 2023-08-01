<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from './assets/Struch/Navbar.vue'
import Footer from './assets/Struch/Footer.vue'
export default {
    name: 'App',
    components: {Navbar , Footer}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  background-image: linear-gradient(to bottom,#80ced7,#215a74);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
