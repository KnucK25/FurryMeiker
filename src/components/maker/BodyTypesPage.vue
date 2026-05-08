<script setup>
import { bodyTypes } from '@/composables/data/bodyTypes'

import { useCharacter } from '@/composables/useCharacter'

const { setBodyType } = useCharacter()
</script>

<template>

  <div class="items-grid">

    <div v-for="item in bodyTypes"
         class="item-card"
         @click="setBodyType(item.id)">

      <img :src="item.icon">

    </div>

  </div>

</template>
