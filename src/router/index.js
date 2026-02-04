import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
 information
import WeatherCardView from '../views/WeatherCardView.vue'
import NewPageView from '../views/NewPageView.vue'
import InformationPageView from '../views/InformationPageView.vue'

import ContactView from '../views/ContactView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import WeatherView from '../views/WeatherView.vue'

 main
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
 information
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

      path: '/sitting',
      name: 'sitting',
      component: () => import('../views/SettingView.vue'),
    },


    {
      
      path: "/register",
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    
    },

    {
      
      path: "/login",
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    
    },

    {
      
      path: "/weather",
      name: 'weather',
      component: () => import('../views/WeatherView.vue'),
    
    },
 
main
  ],
})

export default router