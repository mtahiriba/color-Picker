import React, { Component } from 'react'

export default class Hero extends Component {
  render() {
    if(this.props.name === 'Joker'){
        throw new Error('Not a Hero');
    }
    return(
        <h2>{this.props.name}</h2>
    )
  }
}
