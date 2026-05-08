<script setup>
  import { computed, ref } from 'vue'

  import { useCharacter } from '@/composables/useCharacter'

  const { favorites, applyFavorite,removeFavorite } = useCharacter()

  const currentPage = ref(1)

  const itemsPerPage = 6

  const totalPages = computed(() => {

    return Math.ceil(
      favorites.value.length / itemsPerPage
    )
  })

  const paginatedFavorites = computed(() => {

    const start =
      (currentPage.value - 1) * itemsPerPage

    const end =
      start + itemsPerPage

    return favorites.value.slice(start, end)
  })

  function nextPage() {

    if (
      currentPage.value < totalPages.value
    ) {
      currentPage.value++
    }
  }

  function prevPage() {

    if (currentPage.value > 1) {
      currentPage.value--
    }
  }
</script>

<template>

  <div class="favorites-page">

    <div class="favorites-grid">

      <div v-for="favorite in paginatedFavorites"
           :key="favorite.id"
           class="favorite-card">

        <div class="favorite-content"
             @click="applyFavorite(favorite)">

          <p>
            Character #{{ favorite.id }}
          </p>

        </div>

        <button class="favorite-delete"
                @click="removeFavorite(favorite.id)">

          ✕

        </button>

      </div>

    </div>

    <div class="pagination">

      <button @click="prevPage">
        ←
      </button>

      <span>
        {{ currentPage }} / {{ totalPages }}
      </span>

      <button @click="nextPage">
        →
      </button>

    </div>

  </div>

</template>
