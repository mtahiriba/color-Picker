import React, { Component } from 'react'

export default class hello extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    changeState(){
        this.setState({
            message : 'Thankyou For subscribing'
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeState()}>Subscribe</button>
      </div>
    )
  }
}
