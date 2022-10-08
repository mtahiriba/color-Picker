import React from 'react'

const WithCounter = (WrappedComponent, CounterNumber) => {
    class NewComponent extends React.Component{
        constructor(props) {
          super(props)
        
          this.state = {
             count: 0
          }
        }

        incrementCount = () => {
            this.setState((prevState)=>{
                return{
                    count: prevState.count + CounterNumber
                }
            })
        }
        
        render(){
            return(
                <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}></WrappedComponent>
            )
        }
    }
    return NewComponent
}

export default WithCounter;