import React, { Component } from 'react'

export default class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         islogedIn: true
      }
    }
    
  render() {
    
    return this.state.islogedIn && <div>Hello Tahir</div>
    
    // return(
    //     (this.state.islogedIn)?
    //     <div>Hello tahir</div>:
    //     <div>Hello Guest</div>
    // )
    
    
    // let message
    // if (this.state.islogedIn) {
    //     message = <div>Hello Tahir</div>        
    // }
    // else{
    //     message = <div>Hello Guest</div>
    // }
    // return message

    // if(this.state.islogedIn){
    //     return <div>Hello Tahir</div>
    // }
    // else{
    //     return <div>Hello Guest</div>
    // }
  }
}
