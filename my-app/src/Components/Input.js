import React, { Component } from 'react'

export default class Input extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        name: 'tahir',
        cast: 'Memon'
    }
    this.inputRefs = React.createRef();
  }
  
  change(){
    this.setState({
        name: 'Arslan',
        cast: 'Bhutto'
    })
  }

    render() {
    return (
      <div>
        {/* <input type="text" ref={this.inputRefs}/>     */}
        My name is {this.state.name} and my cast is {this.state.cast}.
      </div>
    )
  }
}
