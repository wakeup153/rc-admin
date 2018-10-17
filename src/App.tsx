import * as React from 'react'
import { Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router'
import './App.css'

export interface InterfaceForApp {
  children ? : any
}

// const redirectToLogin = (props: any): any => {
//   return (
//     <Redirect
//       to={{
//         pathname: '/login',
//         state: {
//           from: props.location || '/'
//         },
//       }}
//     />
//   )
// }

class App extends React.Component<InterfaceForApp, {}> {
  public render() {
    return (
      <div className="app">
        <Switch>
          {
            renderRoutes(routes)
          }
        </Switch>
      </div>
    )
  }
}

export default App
