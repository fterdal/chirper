/* eslint class-methods-use-this:0 */
import React, { Component } from 'react';

export default class ChirpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <h4>New Chirp</h4>
        <p>Form goes here...</p>
      </div>
    )
  }
}
