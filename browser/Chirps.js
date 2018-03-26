/* eslint react/prefer-stateless-function:0 */
import React, { Component } from 'react';

import ChirpsList from './ChirpsList';
import ChirpForm from './ChirpForm';

export default class Chirps extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        {console.log(this)}
        <ChirpForm />
        <ChirpsList />
      </div>
    )
  }
}
