<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <img src="/img/lion.png" alt="" width="30" class="d-inline-block align-text-top" />
    <router-link to="/" class="navbar-brand" >Saxon Games</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/shipping" class="nav-link">Shipping</router-link>
        <router-link to="/returns" class="nav-link">Returns</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Navbar',
}
</script>