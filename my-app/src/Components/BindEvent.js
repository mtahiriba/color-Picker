import React, { Component } from 'react'

export default class BindEvent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    //   this.clickHandler1 = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message: "bye"
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message: "bye"
        })
        console.log(this)
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>         */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
