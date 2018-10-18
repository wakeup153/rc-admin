import Home from '../pages/home'
import Login from '../pages/login'
import NoMatch from '../pages/NoMatch'
import HomeRoutes from './home'

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    routes: [...HomeRoutes],
  },
  {
    path: '/login',
    component: Login,
    routes: [],
  },
  {
    path: '*',
    component: NoMatch,
  },
]