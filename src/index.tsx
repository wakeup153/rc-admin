import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware, ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Provider  } from 'react-redux'
import createSagaMiddleWare from 'redux-saga'
import rootReducer from './models/reducer'
import rootSaga from './models/saga'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

// create history
const history = createHistory()
// react-router-redux MiddleWare
const reuduxMiddleWare = routerMiddleware(history)
// saga Middleware
const sagaMiddleWare  = createSagaMiddleWare()
// creae store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare, reuduxMiddleWare))
sagaMiddleWare.run(rootSaga)
// const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker()
