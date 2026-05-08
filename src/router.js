import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/components/HomePage.vue'
import MakerPage from '@/components/maker/MakerPage.vue'
import AccessoriesPage from '@/components/maker/AccessoriesPage.vue'
import ClothesPage from '@/components/maker/ClothesPage.vue'
import SocksPage from '@/components/maker/SocksPage.vue'
import FavoritesPage from '@/components/maker/FavoritesPage.vue'
import BodyTypesPage from '@/components/maker/BodyTypesPage.vue'
import AboutPage from '@/components/AboutPage.vue'
import ContactsPage from '@/components/ContactsPage.vue'


const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home, name: "Home" },
  {
    path: '/maker',
    component: MakerPage,
    name: 'Maker',
    children: [
      {
        path: 'body-types',
        name: 'BodyTypes',
        component: BodyTypesPage,
      },

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

      {
        path: 'favorites',
        name: 'Favorites',
        component: FavoritesPage,
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },

  {
    path: '/contacts',
    name: 'Contacts',
    component: ContactsPage,
  },
]

export const router = createRouter({
  history: createWebHashHistory("/FurryMeiker/"),
  routes
});
