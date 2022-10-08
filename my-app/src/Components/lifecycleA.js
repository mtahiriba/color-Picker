import React, { Component } from 'react'
import Child from './lifecycleB'

export default class lifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'tahir'
    }
    console.log('lifecycleA constructor')
  }

  static getDerivedStateFromProps(props, state){
    console.log('lifecycleA getDerivedStateFromProps')
    return null
  }
  
  componentDidMount(){
    console.log('lifecycleA componentDidMount')
  }

  shouldComponentUpdate(){
    console.log('lifecycleA shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(){
    console.log('lifecycleA getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate(){
    console.log('lifecycleA componentDidUpdate')
  }

  buttonClick = () => {
    this.setState({
      name: 'Muhammad Tahir'
    })
  }

  render() {
    console.log('lifecycleA Render')
    return (
      <div>
        <div>Lifecycle A</div>
        <Child></Child>
        <button onClick={this.buttonClick}>Click me</button>
      </div>
    )
  }
}
