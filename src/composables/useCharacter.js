import { reactive, computed } from 'vue'

import { clothes } from './data/clothes'

import { accessories } from './data/accessory'

import { socks } from './data/socks'

import { body } from './data/body'


const character = reactive({
  body: 1,
  clothes: 1,
  accessories: 1,
  socks: 1,
})

function setBody(id) {
  character.body = id
}

function setClothes(id) {
  character.clothes = id
}

function setAccessories(id) {
  character.accessories = id
}

function setSocks(id) {
  character.socks = id
}

function resetCharacter() {
  character.body = 1

  character.clothes = 1

  character.accessories = 1

  character.socks = 1
}

const currentBody = computed(() => {
  return body.find(
    item => item.id === character.body
  )
})

const currentClothes = computed(() => {
  return clothes.find(
    item => item.id === character.clothes
  )
})

const currentAccessories = computed(() => {
  return accessories.find(
    item => item.id === character.accessories
  )
})

const currentSocks = computed(() => {
  return socks.find(
    item => item.id === character.socks
  )
})


function saveCharacter() {
  localStorage.setItem(
    'character',
    JSON.stringify(character)
  )
}

function loadCharacter() {
  const savedCharacter =
    localStorage.getItem('character')

  if (!savedCharacter) return

  const parsedCharacter =
    JSON.parse(savedCharacter)

  character.body =
    parsedCharacter.body

  character.clothes =
    parsedCharacter.clothes

  character.accessories =
    parsedCharacter.accessories

  character.socks =
    parsedCharacter.socks

  character.skinColor =
    parsedCharacter.skinColor
}

const hasClothes = computed(() => {
  return !!character.clothes
})

const hasAccessories = computed(() => {
  return !!character.accessories
})

export function useCharacter() {

  return {
    character,
    setBody,
    setClothes,
    setAccessories,
    setSocks,
    resetCharacter,
    currentBody,
    currentClothes,
    currentAccessories,
    currentSocks,
    saveCharacter,
    loadCharacter,
    hasClothes,
    hasAccessories,
  }
}
