import Dashboard from './views/Dashboard.vue'
import Rooms from './views/Rooms.vue'
import Budget from './views/Budget.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  {
    path: '/',
    meta: { title: 'Dashboard' },
    component: Dashboard
  },
  {
    path: '/rooms',
    meta: { title: 'Salles' },
    component: Rooms
  },
  {
    path: '/budget',
    meta: { title: 'Budget' },
    component: Budget
  },
  {
    path: '/404',
    meta: { title: 'Not Found' },
    component: NotFound
  },  
  {
    path: '/:path(.*)',
    redirect: '/404'
  }
]
