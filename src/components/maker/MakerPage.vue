<script setup>
  import { RouterLink, RouterView } from 'vue-router'

  import { body } from '@/composables/data/body'

  import { useCharacter } from '@/composables/useCharacter'

  import { onMounted } from 'vue'

  import { bodyTypes } from '@/composables/data/bodyTypes'

  // При загрузке страницы
  // загружаем сохранённого персонажа
  // и избранное
  onMounted(() => {

    loadCharacter()
    loadFavorites()

  })

  const {

    setBody,
    availableBodies,
    currentBody,
    currentClothes,
    currentAccessories,
    currentSocks,
    loadCharacter,
    resetCharacter,
    randomizeCharacter,
    undoCharacter,
    favorites,
    saveFavorite,
    loadFavorites,
    applyFavorite,
    exportCharacter

  } = useCharacter()

</script>

<template>

  <div class="maker-page">

    <!-- ====================== -->
    <!-- Цвета / типы тела      -->
    <!-- ====================== -->

    <aside class="colors-sidebar">

      <div v-for="item in availableBodies"
           :key="item.id"
           class="body-color-button"
           @click="setBody(item.id)">

        <img :src="item.preview"
             class="body-color-image">

      </div>

    </aside>

    <!-- ====================== -->
    <!-- Превью персонажа       -->
    <!-- ====================== -->

    <section class="preview-section">

      <!-- ====================== -->
      <!-- Кнопки действий        -->
      <!-- ====================== -->

      <div class="maker-toolbar">

        <!-- Рандом -->
        <button class="toolbar-button"
                @click="randomizeCharacter">
          🎲
        </button>

        <!-- Undo -->
        <button class="toolbar-button"
                @click="undoCharacter">
          ↩
        </button>

        <!-- Сохранение в избранное -->
        <button class="toolbar-button"
                @click="saveFavorite">
          ❤️
        </button>

        <!-- Экспорт PNG -->
        <button class="toolbar-button"
                @click="exportCharacter">
          📷
        </button>

      </div>

      <!-- ====================== -->
      <!-- Слои персонажа         -->
      <!-- ====================== -->

      <div class="character-preview">

        <!-- Тело -->
        <img v-if="currentBody"
             :src="currentBody.image"
             class="character-layer">

        <!-- Носки -->
        <img v-if="currentSocks"
             :src="currentSocks.image"
             class="character-layer">

        <!-- Одежда -->
        <img v-if="currentClothes"
             :src="currentClothes.image"
             class="character-layer">

        <!-- Аксессуары -->
        <img v-if="currentAccessories"
             :src="currentAccessories.image"
             class="character-layer">

      </div>

    </section>

    <!-- ====================== -->
    <!-- Категории редактора    -->
    <!-- ====================== -->

    <aside class="parts-sidebar">

      <!-- ====================== -->
      <!-- Кнопки категорий       -->
      <!-- ====================== -->

      <div class="category-column">

        <!-- Типы тела -->
        <RouterLink :to="{ name: 'BodyTypes' }"
                    class="category-button">

          <img src="/buttons/bodytype.png"
               class="category-icon">

        </RouterLink>

        <!-- Аксессуары -->
        <RouterLink :to="{ name: 'Accessories' }"
                    class="category-button">

          <img src="/buttons/accessories.png"
               alt="Accessories"
               class="category-icon">

        </RouterLink>

        <!-- Одежда -->
        <RouterLink :to="{ name: 'Clothes' }"
                    class="category-button">

          <img src="/buttons/clothes.png"
               alt="Clothes"
               class="category-icon">

        </RouterLink>

        <!-- Носки -->
        <RouterLink :to="{ name: 'Socks' }"
                    class="category-button">

          <img src="/buttons/socks.png"
               alt="Socks"
               class="category-icon">

        </RouterLink>

        <!-- Избранное -->
        <RouterLink :to="{ name: 'Favorites' }"
                    class="category-button">

          <img src="/buttons/favorites.png"
               class="category-icon">

        </RouterLink>

      </div>

      <!-- ======================   -->
      <!-- Контент дочерних страниц -->
      <!-- ======================   -->

      <div class="items-section">

        <RouterView />

      </div>

    </aside>

  </div>

</template>
