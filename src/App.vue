<template>
  <div class="container">
  <Headerbar></Headerbar>
  <Navbar></Navbar>
  <div class="row">
    <div class="col-3">
      <leftbar></leftbar>
    </div>
    <div class="col-6">
      <router-view></router-view>
    </div>
    <div class="col-3">
      <Rightbar></Rightbar>
    </div>
  </div>
  </div>
</template>

<script>
import Headerbar from './components/Headerbar.vue'
import Navbar from './components/Navbar.vue'
import Leftbar from './components/Leftbar.vue'
import Rightbar from './components/Rightbar.vue'

export default {
  name: 'App',
  components: {
    Headerbar,
    Navbar,
    Leftbar,
    Rightbar
  }
}
</script>

<style>

</style>
