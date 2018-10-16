import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider  } from 'react-redux'
import rootReducer from './models/reducer'
import App from './App'
import Home from './pages/home'
import Login from './pages/login'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

// creae store
const store = createStore(rootReducer)
// const history = syncHistoryWithStore(browserHistory, store)
const redirectToLogin = (props: any): any => {
  return (
    <Redirect
      to={{
        pathname: '/login',
        state: {
          from: props.location || '/'
        },
      }}
    />
  )
}
ReactDOM.render(
  <Router>
    <Switch>
      <Provider store={store}>
        <App>
          <Route exact={true} path="/" render={redirectToLogin}/>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </App>
      </Provider>
    </Switch>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker()
