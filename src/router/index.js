import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: "/time",
      component: () => import('../views/index.vue'),
      children: [
        {
          path: '/time',
          name: 'Time',
          component: () => import('../views/TimeMaster.vue')
        },
        {
          path: '/lovelist',
          name: 'Lovelist',
          component: () => import('../views/LoveList.vue')
        },
        {
          path: '/messageboard',
          name: 'Messageboard',
          component: () => import('../views/MessageBoard.vue')
        },
        {
          path: '/camara',
          name: 'Camara',
          component: () => import('../views/Camara.vue')
        }
      ]
    },
    
  ]
})

export default router
