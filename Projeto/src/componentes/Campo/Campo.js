import React from 'react'
import './Campo.css'

class Campo extends React.Component {
  //herda tudo o que de classes o react tem
  constructor(props) {
    super(props)
    this.state = {
      erro: ''
    }
  }

  render(){
    return (
      <input 
        id={props.id}
        className="campo"
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
      />
    )
  }
}




export default Campo