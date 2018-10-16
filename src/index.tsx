import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider  } from 'react-redux'
import rootReducer from './models/reducer'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

// creae store
const store = createStore(rootReducer)
// const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker()
