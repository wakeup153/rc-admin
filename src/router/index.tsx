import Home from '../pages/home'
import Login from '../pages/login'
import NoMatch from '../pages/NoMatch'

export default [
  {
    path: '/',
    component: Home,
    exact: true,
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