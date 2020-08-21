import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let x = event.clientX;
    let  y = event.clientY;
    drawChromeBoiAtCoords(x, y)
  }
  
  handleClick = () => {
    toggleCycling()
  }

  handleKeyPress = (event) => {
    if (event.key === 'a'){
      return resize('+');
    }else if(event.key === 's'){
      return resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}

// var x = event.clientX;     // Get the horizontal coordinate
// var y = event.clientY;     // Get the vertical coordinate
// var coor = "X coords: " + x + ", Y coords: " + y;
