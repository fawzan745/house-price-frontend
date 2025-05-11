import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EDAView from '@/views/EDAView.vue'
import AlgoritmaView from '@/views/AlgoritmaView.vue'
import BenefitView from '@/views/BenefitView.vue'
import PrediksiView from '@/views/PrediksiView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/EDA',
      name: 'EDA',
      component: EDAView,
    },
    {
      path: '/algoritma',
      name: 'algoritma',
      component: AlgoritmaView,
    },
    {
      path: '/benefit',
      name: 'benefit',
      component: BenefitView,
    },
    {
      path: '/predict',
      name: 'predict',
      component: PrediksiView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
  ],
})

export default router
