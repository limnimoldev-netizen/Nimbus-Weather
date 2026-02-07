import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import WeatherView from '../views/WeatherView.vue'
import SearchView from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
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

    {
      
      path: "/search",
      name: 'search',
      component: () => import('../views/SearchView.vue'),
    
    },
 

  ],

  
  
  
})

export default router
