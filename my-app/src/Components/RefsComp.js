import React, { Component } from 'react'

class RefsComp extends Component {
    constructor(props) {
      super(props)
      this.inputref = React.createRef()
    }
    
    currentfocus(){
        this.inputref.current.focus()
    }
    
  render() {
    return (
      <div>
        <input type="Text" ref={this.inputref}/>
      </div>
    )
  }
}

export default RefsComp
