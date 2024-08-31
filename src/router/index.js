import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/01-about/About.vue')
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../views/02-works/Works.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/03-blog/Blog.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/04-contact/Contact.vue')
    },
    

  ]
})

export default router
