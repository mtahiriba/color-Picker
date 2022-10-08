import React, { Component } from 'react'

export default class lifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'tahir'
      }
      console.log('lifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('lifecycleB getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(){
        console.log('lifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('lifecycleB getSnapshotBeforeUpdate')
    }

    componentDidUpdate(){
        console.log('lifecycleB componentDidUpdate')
    }

    componentDidMount(){
        console.log('lifecycleB componentDidMount')
    }

  render() {
    return (
      <div>
        LifeCycle B        
      </div>
    )
  }
}
