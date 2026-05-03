<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">

    <!-- HEADER -->
    <header class="header">
      <router-link :to="{ name: 'Home' }" class="logo">
        FurryMeiker!
      </router-link>
    </header>

    <!-- PAGE -->
    <RouterView />

    <!-- FOOTER -->
    <footer class="footer">
      <p>Подвал сайта</p>
    </footer>

  </div>
</template>
