import * as React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import NoMatch from './pages/NoMatch'
import './App.css'

export interface InterfaceForApp {
  children ? : any
}

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

class App extends React.Component<InterfaceForApp, {}> {
  public render() {
    return (
      <div className="app">
        <Switch>
          <Route exact={true} path="/" render={redirectToLogin}/>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default App
