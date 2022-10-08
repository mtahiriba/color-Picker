import React, { Component } from 'react'

export default class name extends Component {
  
  constructor(){
    super()
    this.state = {
        name: 'Muhamamd'
    }
    setTimeout(()=>{
        this.setState(prev=>({
            name: prev.name + " Tahir"
        }))
    }, 5000)
}


    render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
      </div>
    )
  }
}
