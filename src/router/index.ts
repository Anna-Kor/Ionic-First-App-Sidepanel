import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/startFolder'
  },
  
  {
    path: '/folder/startFolder',
    component: () => import ('../views/StartFolder.vue')
  },
  {
    path: '/folder/bookInstytutFolder',
    component: () => import ('../views/BookInstytutFolder.vue')
  },
  {
    path: '/folder/bookJoylandFolder',
    component: () => import ('../views/BookJoylandFolder.vue')
  },
  {
    path: '/folder/bookBazarFolder',
    component: () => import ('../views/BookBazarFolder.vue')
  },
  {
    path: '/folder/bookKsiegaFolder',
    component: () => import ('../views/BookKsiegaFolder.vue')
  },
  {
    path: '/folder/bookNormalniFolder',
    component: () => import ('../views/BookNormalniFolder.vue')
  },
  {
    path: '/folder/bookPapieroweFolder',
    component: () => import ('../views/BookPapieroweFolder.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
