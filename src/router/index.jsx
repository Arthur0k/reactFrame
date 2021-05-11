import { lazy } from 'react'
import NotFound from '../common/NotFound'

const routes = [
  {
    path: '/',
    component: lazy(() => import('pages/Counter')),
    title: 'counter'
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes;
