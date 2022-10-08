import React, { Component } from 'react'
import RefsComp from './RefsComp'

class CurrentFocus extends Component {
    constructor(props) {
      super(props)
    
      this.curentFocus = React.createRef()
    }
    
    clickHandler = event => {
        this.curentFocus.current.currentfocus()
        console.log(this.curentFocus)
    }

  render() {
    return (
      <div>
        <RefsComp ref={this.curentFocus}></RefsComp>
        <button onClick={this.clickHandler}>Current Focus</button>        
      </div>
    )
  }
}

export default CurrentFocus
