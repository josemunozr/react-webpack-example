import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './menu'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOptions : ['Opción 1','Opción 2','Opción 3','Opción 4']
    }
  }

  render () {
    return <Menu  options={this.state.menuOptions}
                  onAddOption={this.handleAddOption.bind(this)}
          />
  }

  handleAddOption () {
    this.setState({
      menuOptions: this.state.menuOptions.concat(['Nueva Opción'])
    })
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
