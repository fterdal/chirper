import React, { Component } from 'react';
import { addChirp } from './utils';

export default class ChirpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(this);
    return (<div>
      <h4>New Chirp</h4>
      <form>
        <input
          name="postText"
          className="form-control"
          type="text"
        />
        <input className="btn btn-submit" type="submit" value="Chirp" />
      </form>
    </div>)
  }
}
