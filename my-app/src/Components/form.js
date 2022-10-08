import React, { Component } from 'react'

class form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName: '',
         coments: '',
         topic: 'react'
      }
    }

    userNameChanged = event => {
        this.setState({
            userName : event.target.value
        })
    }

    comentsChanged = event => {
        this.setState({
            coments: event.target.value
        })
    }

    topicChanged = event => {
        this.setState({
            topic: event.target.value
        })
    }

    submitClick = event => {
        alert(`${this.state.userName} ${this.state.coments} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    const {userName, coments, topic} = this.state
    return (
      <form onSubmit={this.submitClick}>
        <div>
            <label>User name: </label>
            <input type="text" value={userName} onChange={this.userNameChanged}/>
        </div>
        <div>
            <label>Coments: </label>
            <textarea name="" id="" cols="20" rows="2" value={coments} onChange={this.comentsChanged}></textarea>
        </div>
        <div>
            <label>Topic: </label>
            <select name="" id="" value={topic} onChange={this.topicChanged}>
                <option value='react'>React</option>
                <option value='java'>Java</option>
                <option value='javaScript'>Java Script</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default form
