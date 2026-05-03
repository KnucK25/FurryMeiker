import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/components/HomePage.vue'
import MakerPage from '@/components/maker/MakerPage.vue'
import AccessoriesPage from '@/components/maker/AccessoriesPage.vue'
import ClothesPage from '@/components/maker/ClothesPage.vue'
import SocksPage from '@/components/maker/SocksPage.vue'


const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home, name: "Home" },
  {
    path: '/maker',
    component: MakerPage,
    name: 'Maker',
    children: [
      {
        path: 'accessories',
        name: 'Accessories',
        component: AccessoriesPage,
      },

      {
        path: 'clothes',
        name: 'Clothes',
        component: ClothesPage,
      },

      {
        path: 'socks',
        name: 'Socks',
        component: SocksPage,
      },
    ],
  }
]

export const router = createRouter({
  history: createWebHashHistory("/FurryMeiker/"),
  routes
});
