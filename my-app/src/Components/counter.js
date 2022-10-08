import React, { Component } from 'react'

export default class counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState((prevState, probs)=>({
            count : prevState.count + parseInt(probs.count)
        }),()=>{console.log(this.state.count)})
        console.log(this.state.count)
    }

    increentFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button onClick={()=> this.increment()}>Click me</button>
      </div>
    )
  }
}
