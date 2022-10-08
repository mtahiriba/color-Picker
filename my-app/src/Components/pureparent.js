import React, { PureComponent } from 'react'
import Purecomponent from './purecomponent'
import RegComponent from './RegComponent'
import MemoComp from './MemoComp'

export default class pureparent extends PureComponent {
    constructor(props) {
        super(props)
      
        this.state = {
           name: 'tahir'
        }
      }

      componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'tahir'
            })
        },2000)
    }

  render() {
    console.log('*******Parent Component Render*********')
    return (
      <div>
        Parent component
        <MemoComp name={this.state.name}/>
        {/* <Purecomponent></Purecomponent>
        <RegComponent></RegComponent> */}
      </div>
    )
  }
}
