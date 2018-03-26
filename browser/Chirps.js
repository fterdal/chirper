import React, { Component } from 'react';

import ChirpsList from './ChirpsList';
import ChirpForm from './ChirpForm';
import { seedChirps } from './utils';

export default class Chirps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirps: seedChirps(),
    }
  }
  addChirp = (newChirp) => {
    this.setState(prevState => {
      return [...prevState, newChirp]
    })
  }
  render() {
    return (
      <div>
        <ChirpForm />
        <ChirpsList chirps={this.state.chirps} />
      </div>
    )
  }
}
