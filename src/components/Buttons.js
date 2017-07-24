import React, { Component } from 'react';
import { render } from 'react-dom';

class Buttons extends Component {
  constructor() {
    super();
    this.state = {
      isDone: false
    }
    this.checkOff = this.checkOff.bind(this);
  }

  checkOff() {
    this.setState({isDone: !this.state.isDone})
  }


  render() {
    let isItDone = this.state.isDone ? "Done!" : "Done?";
    return(
      <button onClick={this.checkOff}>{isItDone}</button>)
  }
}

export default Buttons;