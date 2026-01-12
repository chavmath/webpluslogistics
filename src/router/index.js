import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Empresa from '../views/Empresa.vue'
import App from '../App.vue'
import Servicios from '@/views/Servicios.vue'
import BodegaServicios from '@/views/BodegaServicios.vue'
import AlmaPlusServicios from '@/views/AlmaPlusServicios.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/empresa',
      name: 'Empresa',
      component: Empresa, 
    },
    {
      path: '/servicios',
      name: 'Servicios',
      component: Servicios, 
    },
    {
      path: '/bodegaplus',
      name: 'BodegaPlus',
      component: BodegaServicios, 
    },
    {
      path: '/almaplus',
      name: 'AlmaPlus',
      component: AlmaPlusServicios, 
    },
  ]
})

export default router
