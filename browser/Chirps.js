import React, { Component } from 'react';

import ChirpsList from './ChirpsList';
import ChirpForm from './ChirpForm';
import { seedChirps, createChirp } from './utils';

export default class Chirps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirps: seedChirps(),
    }
  }
  addChirp = (newChirpText)  => {
    const nextId = this.state.chirps.reduce((highestId, { id }) => {
      return id > highestId ? id : highestId
    }, 0) + 1;
    this.setState(prevState => {
      return {
        ...this.state,
        chirps: [...prevState.chirps, createChirp(nextId, newChirpText)]
      }
    })
  }
  render() {
    return (
      <div>
        <ChirpForm addChirp={this.addChirp} />
        <ChirpsList chirps={this.state.chirps} />
      </div>
    )
  }
}
