import * as React from 'react'
import { connect } from 'react-redux'

interface InterfaceForHistory {
  push: (path ?: string, state ?: object) => void,
}
export interface InterfaceForLogin {
  history: InterfaceForHistory,
}
class Login extends React.Component<InterfaceForLogin, object> {
  public handleClick = (): void => {
    const { history } = this.props
    history.push('/')
  }
  public render () {
    return (
      <div onClick={this.handleClick}>
        Login
      </div>
    )
  }
}
const mapStateProps = ({ login }: { login: object }): object => ({
  login
})
export default connect(mapStateProps)(Login)
