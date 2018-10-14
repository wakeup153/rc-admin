import * as React from 'react'
import './App.css'

export interface InterfaceForApp {
  children ? : any
}

class App extends React.Component<InterfaceForApp, {}> {
  public render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    )
  }
}

export default App
