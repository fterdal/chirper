import React, { Component } from 'react';

export default class ChirpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errors: [],
      dirty: false,
    }
  }
  componentWillUpdate() {
    this.validateForm();
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    // if (!this.validateForm()) return;
    if (this.state.errors.length) return;
    this.props.addChirp(this.state.value);
    this.setState({ value: '', dirty: false, errors: [] });
  }
  handleChange = (evt) => {
    this.setState({
      value: evt.target.value,
      dirty: true,
    })
  }
  // Returns true iff the chirp can be submitted. If not, it adds to a list of
  // errors to be fixed.
  validateForm = () => {
    const { value, errors, dirty } = this.state;
    let isValid = true;
    if (!value) {
      isValid = false;
      if (!dirty) return isValid;
      errors.push('Chirp must not be empty');
    }
    if (value.length > 140) {
      errors.push('Chirp must not be longer than 140');
      isValid = false;
    }
    if (value.includes('bawk')) {
      errors.push('Chirp must not contain profanity');
      isValid = false;
    }
    return isValid;
  }
  render() {
    console.log(this.state)
    this.validateForm();
    const { state: { value, errors }, handleChange, handleSubmit } = this;
    const errorsList = errors.length ? (
      <ul>
        {errors.map(error => <li key={error[0] + error.length}>{error}</li>)}
      </ul>
    ) : null
    return (
      <div>
        <h4>New Chirp</h4>
        <form className="" onSubmit={handleSubmit}>
          <div className="row">
            <input
              name="chirpText"
              className="textarea"
              type="text"
              value={value}
              onChange={handleChange}
            />
            <input className="btn btn-submit" type="submit" value="Chirp" />
          </div>
        </form>
        {errorsList}
      </div>
    )
  }
}
