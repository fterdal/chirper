import React, { Component } from 'react';

import ChirpsList from './ChirpsList';
import ChirpForm from './ChirpForm';
import { seedChirps, appendChirp } from './utils';

export default class Chirps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirps: [],
    }
  }
  addChirp = (chirpText) => {
    console.log('adding a chirp!', chirpText)
    this.setState({
      chirps: appendChirp(this.state.chirps, chirpText)
    })
  }
  componentWillMount() {
    this.setState({ chirps: seedChirps() })
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
