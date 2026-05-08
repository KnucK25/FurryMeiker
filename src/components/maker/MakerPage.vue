<script setup>
  import { RouterLink, RouterView } from 'vue-router'

  import { body } from '@/composables/data/body'

  import { useCharacter } from '@/composables/useCharacter'

  const {
    setBody,
    currentBody,
    currentClothes,
    currentAccessories,
    currentSocks,
  } = useCharacter()
</script>

<template>
  <div class="maker-page">
    <aside class="colors-sidebar">

      <div v-for="item in body"
           class="body-item"
           @click="setBody(item.id)">

        <img :src="item.image"
             :alt="item.name">

      </div>

    </aside>

    <section class="preview-section">

      <div class="character-preview">

        <img v-if="currentBody"
             :src="currentBody.image"
             class="character-layer">

        <img v-if="currentSocks"
             :src="currentSocks.image"
             class="character-layer">

        <img v-if="currentClothes"
             :src="currentClothes.image"
             class="character-layer">

        <img v-if="currentAccessories"
             :src="currentAccessories.image"
             class="character-layer">

      </div>

    </section>
  <aside class="parts-sidebar">

      <div class="category-column">

        <RouterLink to="/maker/accessories"
          class="category-button">
          <img src="/buttons/clothes/button_01.png" alt="Аксессуары">
        </RouterLink>

        <RouterLink to="/maker/clothes"
          class="category-button">
          <img src="/buttons/clothes/button_02.png" alt="Одежда">
        </RouterLink>

        <RouterLink to="/maker/socks"
          class="category-button">
          <img src="/buttons/clothes/button_00.png" alt="Носки">
        </RouterLink>

      </div>

      <div class="items-section">

        <RouterView />

      </div>

    </aside>

  </div>
</template>
