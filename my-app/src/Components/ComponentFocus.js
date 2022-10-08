import React, { Component } from 'react'
import Input from './Input'

export default class ComponentFocus extends Component {
    constructor(props) {
      super(props) 
      this.comFocus = React.createRef()
    }
    
    clickHandler = () => {
        this.comFocus.current.change()
    }

  render() {
    return (
      <div>
        <Input ref={this.comFocus}></Input>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}
