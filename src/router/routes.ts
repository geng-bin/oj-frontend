import HelloWorld from '@/components/HelloWorld.vue'
import about from '@/components/aboutView.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: "/",
          name: "home",
          component: HelloWorld,
      }, {
            path: "/about",
          name: "about",
          component: about,
    }
    
  ]
})

export const routes = router.options.routes; 