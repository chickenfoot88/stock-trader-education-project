<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link :to="{ name: 'Home' }" class="navbar-brand">Stock Trader</router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <router-link :to="{ name: 'Portfolio' }" tag="li" active-class="active" class="nav-item">
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link :to="{ name: 'Stocks' }" tag="li" active-class="active" class="nav-item">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">End day</a>
        </li>
        <li class="nav-item">
          <a 
            href="#"
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save & Load</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a href="#">Save Data</a>
              <a href="#">Load Data</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: '',
  data() {
    return {}
  },
}
</script>
<style></style>
