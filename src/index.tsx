import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
ReactDOM.render(
  <Router>
    <Switch>
      <Provider store={store}>
        <App>
          <Route exact={true} path="/" component={Home} />
          <Route path="/login" component={Login} />
        </App>
      </Provider>
    </Switch>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker()
