<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <div class="app">

    <!-- ====================== -->
    <!-- Шапка сайта            -->
    <!-- ====================== -->

    <header class="header">

      <!-- Логотип -->
      <router-link :to="{ name: 'Home' }" class="logo">
      </router-link>

      <!-- Навигация -->
      <nav class="header-nav">

        <!-- О нас -->
        <RouterLink :to="{ name: 'About' }">

          О нас

        </RouterLink>

        <!-- Контакты -->
        <RouterLink :to="{ name: 'Contacts' }">

          Контакты

        </RouterLink>

      </nav>
    </header>

    <!-- ====================== -->
    <!-- Основной контент       -->
    <!-- ====================== -->

    <main class="page-content">

      <RouterView />

    </main>

    <!-- ====================== -->
    <!-- Подвал сайта           -->
    <!-- ====================== -->

    <footer class="footer">
      <p>
        Подвал сайта
      </p>
    </footer>

  </div>

</template>
