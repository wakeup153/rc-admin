import * as React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  public render () {
    console.log('home', this.props)
    return (
      <div>
        Home
        <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default Home
