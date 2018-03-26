import React, { Component } from 'react';
import { addChirp } from './utils';

export default class ChirpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  render() {
    console.log(this);
    return (
      <div>
        <h4>New Chirp</h4>
        <form className="col s12">
          <div className="row">
            <input
              name="chirpText"
              className="materialize-textarea"
              type="text"
            />
            <input className="btn btn-submit" type="submit" value="Chirp" />
          </div>
        </form>
      </div>
  )
  }
}
