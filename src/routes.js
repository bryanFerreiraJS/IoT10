import Dashboard from './views/Dashboard.vue'
import Rooms from './views/Rooms.vue'
import Budget from './views/Budget.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/rooms',
    component: Rooms
  },
  {
    path: '/budget',
    component: Budget
  },
  {
    path: '/404',
    component: NotFound
  },  
  {
    path: '/:path(.*)',
    redirect: '/404'
  }
]
