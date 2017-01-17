import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './menu'

class App extends React.Component {
  constructor() {
    super()
  }

  render () {
    let menuUptions = ['Opción 1','Opción 2','Opción 3','Opción 4']
    return <Menu options={menuUptions} />
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
