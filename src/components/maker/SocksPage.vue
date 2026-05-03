<script setup>
  import { socks } from '@/composables/data/socks'

  import { useCharacter } from '@/composables/useCharacter'

  const {
    setSocks,
  } = useCharacter()
</script>

<template>

  <div class="items-grid">

    <div v-for="item in socks"
         class="item-card"
         @click="setSocks(item.id)">

      <img :src="item.image"
           :alt="item.name">

    </div>

  </div>

</template>
