import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReposView from '@/views/ReposView.vue'
import SingleRepoView from '@/views/SingleRepoView.vue'
import TheError from '@/components/TheError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Repos',
      name: 'Repos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ReposView
    },
    {
      path: '/Repos/:username/:id',
      name: 'SingleRepo',
      component: SingleRepoView,
      props: true
    },
    {
      path: '/404Error',
      name: '404Error',
      component: TheError

    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404Error'
    }
  ]
})

export default router
