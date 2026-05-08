<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="home-page">

    <div class="home-content">

      <h1>Создай собственного персонажа!</h1>

      <p>
        Настраивай внешний вид, выбирай цвета,
        одежду и сохраняй получившийся образ 
      </p>

      <RouterLink :to="{ name: 'Maker' }"
                  class="start-btn">
        Начать
      </RouterLink>

    </div>

  </section>
</template>
