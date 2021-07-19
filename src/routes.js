import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/404',
    component: NotFound
  },  
  {
    path: '/:path(.*)',
    redirect: '/404'
  },
]
