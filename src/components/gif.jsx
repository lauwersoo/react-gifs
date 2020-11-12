import React, { Component } from 'react'

class Gif extends Component {
  render() {
    const src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif`
    return(
      <div className="selected-gif">
        <img className="gif" src={src}></img>
      </div>
    )
  }
}

export default Gif
