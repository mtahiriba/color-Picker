import React, { Component } from 'react'

export default class MyButton extends Component {
  constructor(){
    super()
    this.state = {
      message: 'Hello',
      count: 0
    }
    
  }
  render() {
    const {message, count} = this.state
    return (
      <div>
        <h1>Message: {message}</h1>
        <h1>Count: {count}</h1>
      </div>
    )
  }
}
