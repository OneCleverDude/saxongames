<template>
  <div class="container">
  <Headerbar></Headerbar>
  <Navbar></Navbar>
  <div class="row">
    <div class="col-lg-3 d-none d-lg-block">
      <leftbar></leftbar>
    </div>
    <div class="col-lg-6">
      <router-view></router-view>
    </div>
    <div class="col-lg-3 d-none d-lg-block">
      <Rightbar></Rightbar>
    </div>
    <div class="col-lg-3 d-lg-none">
      <leftbar></leftbar>
    </div>
  </div>
  <Footer></Footer>
  </div>
</template>

<script>
import Headerbar from './components/Headerbar.vue'
import Navbar from './components/Navbar.vue'
import Leftbar from './components/Leftbar.vue'
import Rightbar from './components/Rightbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Headerbar,
    Navbar,
    Leftbar,
    Rightbar,
    Footer
  }
}
</script>

<style>

</style>
