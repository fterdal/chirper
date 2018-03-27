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
  componentWillMount() {
    this.setState({ chirps: seedChirps() })
  }
  addChirp = (newChirpText)  => {
    this.setState({ chirps: appendChirp(this.state.chirps, newChirpText)})
  }
  render() {
    console.log('this.state.chirps', this.state.chirps)
    return (
      <div>
        <ChirpForm addChirp={this.addChirp} />
        <ChirpsList chirps={this.state.chirps} />
      </div>
    )
  }
}
