import * as React from 'react'
import { Switch, withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router'

const styles = require('./App.less')

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
      <div className={styles.App}>
        <Switch>
          {
            renderRoutes(routes)
          }
        </Switch>
      </div>
    )
  }
}

export default withRouter((props) => (
  <App {...props} />
))
