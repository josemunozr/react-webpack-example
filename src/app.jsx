import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
  }

  render () {
    return (
      <div>
        <span>Hola! soy un componente</span>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
