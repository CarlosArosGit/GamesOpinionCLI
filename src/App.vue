<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand"><i class="bi bi-controller"></i> <strong>Games opinion</strong></a>
        <router-link to="/" class="homeIcon"><i class="bi bi-house-fill"></i> Home</router-link>
      </div>
    </nav>
  <router-view />
</template>

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
a{
  text-decoration: none;
}
.homeIcon{
  color: white;
}
</style>
