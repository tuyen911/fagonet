import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Solutions from '../components/Solutions.vue'
import Services from '../components/Services.vue'
import ContactUs from '../components/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../components/Services.vue')
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: () => import('../components/Solutions.vue')
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: () => import('../components/ContactUs.vue')
  },
  {
    path: '/managed',
    name: 'Managed',
    component: () => import('../components/Services/Managed.vue')
  },
  {
    path: '/theart',
    name: 'Theart',
    component: () => import('../components/Services/Theart.vue')
  },
  {
    path: '/pentest',
    name: 'Pentest',
    component: () => import('../components/Services/Pentest.vue')
  },
  {
    path: '/application',
    name: 'Application',
    component: () => import('../components/Services/Application.vue')
  },
  {
    path: '/siem',
    name: 'Siem',
    component: () => import('../components/Solution/Siem.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
