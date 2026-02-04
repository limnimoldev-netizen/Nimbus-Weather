import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WeatherCardView from '../views/WeatherCardView.vue'
import NewPageView from '../views/NewPageView.vue'
import InformationPageView from '../views/InformationPageView.vue'
import Information1PageView from '../views/Information1PageView.vue'
import Information2PageView from '../views/Information2PageView.vue'
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/weathercard',
      name: 'weathercard',
      component: WeatherCardView,
    },
    {
      path: '/New',
      name: 'newpage',
      component: NewPageView,
    },
    {
      path: '/infor',
      name: 'information',
      component: InformationPageView,
    },
    {
      path: '/infor1',
      name: 'information1',
      component: Information1PageView,
    },
    {
      path: '/infor2',
      name: 'information2',
      component: Information2PageView,
    },
  ],
})

export default router
