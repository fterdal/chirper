import React, { Component } from 'react';

export default class ChirpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
  }
  handleChange = (evt) => {
    console.log(this.state)
    this.setState({
      value: evt.target.value
    })
  }
  render() {
    return (
      <div>
        <h4>New Chirp</h4>
        <form className="col s12">
          <div className="row">
            <input
              name="chirpText"
              className="materialize-textarea"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input className="btn btn-submit" type="submit" value="Chirp" />
          </div>
        </form>
      </div>
    )
  }
}
