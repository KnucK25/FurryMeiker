<script setup>
  import { clothes } from '@/composables/data/clothes'

  import { useCharacter } from '@/composables/useCharacter'

  const { setClothes } = useCharacter()
</script>

<template>

  <div class="items-grid">

    <div v-for="item in clothes"
         class="item-card"
         @click="setClothes(item.id)">

      <img :src="item.image"
           :alt="item.name">

    </div>

  </div>

</template>
