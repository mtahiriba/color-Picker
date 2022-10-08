import React, {Component} from "react";

class Welcome extends Component{
    constructor(){
        super()
        this.state ={
            count: 0
        }
    }

    Increment(){
        this.setState((prevstate, probs)=>(
            {
                count: prevstate.count + parseInt(probs.inc)
            }
        ), ()=>(console.log("callback value: " + this.state.count)))
        console.log(this.state.count)
    }

    Increment5(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=>this.Increment()}>Increment</button>
            </div>
        ) 
    }
}
export default Welcome