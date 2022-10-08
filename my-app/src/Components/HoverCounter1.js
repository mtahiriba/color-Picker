import React, { Component } from 'react'

export default class HoverCounter1 extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <h2 onMouseOver={incrementCount}>
        Hover {count} times
      </h2>
    )
  }
}
