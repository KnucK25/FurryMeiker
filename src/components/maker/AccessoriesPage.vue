<script setup>
  import { accessories } from '@/composables/data/accessory'

  import { useCharacter } from '@/composables/useCharacter'

  const {
    setAccessories,
  } = useCharacter()
</script>

<template>

  <div class="items-grid">

    <div v-for="item in accessories"
         class="item-card"
         @click="setAccessories(item.id)">

      <img :src="item.image"
           :alt="item.name">

    </div>

  </div>

</template>
