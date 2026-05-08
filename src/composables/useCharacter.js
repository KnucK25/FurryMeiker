
import { reactive, computed, ref } from 'vue'
import { clothes } from './data/clothes'
import { accessories } from './data/accessory'
import { socks } from './data/socks'
import { body } from './data/body'

// Основное состояние персонажа
const character = reactive({

  // Текущее тело
  body: 1,

  // Тип тела
  bodyType: 1,

  // Текущая одежда
  clothes: 1,

  // Текущие аксессуары
  accessories: 1,

  // Текущие носки
  socks: 1,

})

// История изменений персонажа
// для undo
const history = ref([])

// Избранные персонажи
const favorites = ref([])

// Сохраняет текущее состояние
// персонажа в историю
function pushHistory() {

  history.value.push({

    body: character.body,

    clothes: character.clothes,

    socks: character.socks,

    accessories: character.accessories,

  })

  // Ограничение истории
  if (history.value.length > 30) {

    history.value.shift()

  }
}

// Возвращает предыдущее состояние
function undoCharacter() {

  const previous =
    history.value.pop()

  if (!previous) return

  character.body =
    previous.body

  character.clothes =
    previous.clothes

  character.socks =
    previous.socks

  character.accessories =
    previous.accessories
}

// Получает случайный элемент массива
function randomItem(array) {

  return array[
    Math.floor(Math.random() * array.length)
  ]
}

// Рандомизирует персонажа
function randomizeCharacter() {

  pushHistory()

  character.body =
    randomItem(body).id

  character.clothes =
    randomItem(clothes).id

  character.socks =
    randomItem(socks).id

  character.accessories =
    randomItem(accessories).id
}

// Изменение тела персонажа
function setBody(id) {

  pushHistory()

  character.body = id
}

// Текущий тип тела
const currentBodyType = computed(() => {

  const selectedBody =
    body.find(
      item => item.id === character.body
    )

  return selectedBody?.typeId

})

// Доступные варианты тела
// для выбранного типа
const availableBodies = computed(() => {

  return body.filter(
    item =>
      item.typeId === currentBodyType.value
  )

})

// Изменение типа тела
function setBodyType(typeId) {

  pushHistory()

  character.bodyType = typeId

  const availableBodies =
    body.filter(
      item => item.typeId === typeId
    )

  // Автоматически выбираем
  // первый доступный цвет
  if (availableBodies.length) {

    character.body =
      availableBodies[0].id

  }
}

// Изменение одежды
function setClothes(id) {

  pushHistory()

  character.clothes = id
}

// Изменение аксессуаров
function setAccessories(id) {

  pushHistory()

  character.accessories = id
}

// Изменение носков
function setSocks(id) {

  pushHistory()

  character.socks = id
}

// Сбрасывает персонажа
// к начальному состоянию
function resetCharacter() {

  character.body = 1

  character.clothes = 1

  character.accessories = 1

  character.socks = 1
}

// Текущее тело
const currentBody = computed(() => {

  return body.find(
    item => item.id === character.body
  )

})

// Текущая одежда
const currentClothes = computed(() => {

  return clothes.find(
    item => item.id === character.clothes
  )

})

// Текущие аксессуары
const currentAccessories = computed(() => {

  return accessories.find(
    item => item.id === character.accessories
  )

})

// Текущие носки
const currentSocks = computed(() => {

  return socks.find(
    item => item.id === character.socks
  )

})

// Загружает персонажа
// из локала
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

// Проверка одежды
const hasClothes = computed(() => {

  return !!character.clothes

})

// Проверка аксессуаров
const hasAccessories = computed(() => {

  return !!character.accessories

})

// Следующий айди избранного
const nextId = computed(() => {

  if (!favorites.value.length) {

    return 1

  }

  return Math.max(
    ...favorites.value.map(f => f.id)
  ) + 1

})

// Сохраняет персонажа
// в избранное
function saveFavorite() {

  favorites.value.push({

    id: nextId.value,

    body: character.body,

    clothes: character.clothes,

    socks: character.socks,

    accessories: character.accessories,

  })

  localStorage.setItem(

    'favorites',

    JSON.stringify(favorites.value)

  )
}

// Загружает избранное
// из локала
function loadFavorites() {

  const saved =
    localStorage.getItem('favorites')

  if (!saved) return

  favorites.value =
    JSON.parse(saved)
}

// Загружает персонажа
// из избранного
function applyFavorite(favorite) {

  pushHistory()

  character.body =
    favorite.body

  character.clothes =
    favorite.clothes

  character.socks =
    favorite.socks

  character.accessories =
    favorite.accessories
}

// Удаляет персонажа
// из избранного
function removeFavorite(id) {

  favorites.value =
    favorites.value.filter(
      favorite => favorite.id !== id
    )

  localStorage.setItem(

    'favorites',

    JSON.stringify(favorites.value)

  )
}

// Экспортирует персонажа
// в PNG файл
async function exportCharacter() {

  // Создание canvas
  const canvas =
    document.createElement('canvas')

  const ctx =
    canvas.getContext('2d')

  // Размер итогового пнг
  canvas.width = 1000
  canvas.height = 808

  // Слои персонажа
  const layers = [

    currentBody.value?.image,

    currentSocks.value?.image,

    currentClothes.value?.image,

    currentAccessories.value?.image,

  ]

  // Рисуем все слои
  for (const src of layers) {

    const image =
      await loadImage(src)

    ctx.drawImage(

      image,

      0,
      0,

      canvas.width,
      canvas.height

    )
  }

  // Создаём ссылку
  // для скачивания
  const link =
    document.createElement('a')

  // Имя файла
  link.download =
    'character.png'

  // Конвертация canvas в пнг
  link.href =
    canvas.toDataURL('image/png')

  // Автоматическое скачивание
  link.click()
}

// Загружает изображение
// для canvas
function loadImage(src) {

  return new Promise((resolve) => {

    const img = new Image()

    img.src = src

    img.onload = () => {

      resolve(img)

    }
  })
}

export function useCharacter() {

  return {
    character,
    setBody,
    availableBodies,
    setBodyType,
    setClothes,
    setAccessories,
    setSocks,
    resetCharacter,
    currentBody,
    currentClothes,
    currentAccessories,
    currentSocks,
    loadCharacter,
    hasClothes,
    hasAccessories,
    randomizeCharacter,
    undoCharacter,
    favorites,
    saveFavorite,
    loadFavorites,
    applyFavorite,
    removeFavorite,
    exportCharacter
  }
}
