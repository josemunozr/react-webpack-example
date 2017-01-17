import React from 'react'

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    let options = this.props.options
    return (
      <div>
        <ul>
          {
            options.map((option, i) => {
              return <li key={i}>{option}</li>
            })
          }
        </ul>
        <button onClick={this.props.onAddOption}>Nueva Opción</button>
      </div>

    )
  }

}

export default Menu
