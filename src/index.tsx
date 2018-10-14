import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Home from './pages/home'
import Login from './pages/login'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <App>
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
      </App>
    </Switch>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker()
