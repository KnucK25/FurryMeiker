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
      <RouterLink :to="{ name: 'Home' }"
                  class="logo-link">

        <img src="/logo.png"
             alt="Logo"
             class="logo-image">

      </RouterLink>

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
