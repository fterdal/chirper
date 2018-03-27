/* eslint class-methods-use-this:0 */
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
  handleChange = (event) => {
    this.setState({ value: event.target.value, dirty: true }, () => {
      this.validateForm();
    });
    if (!this.state.value) {
      this.setState({ errors: ['chirps must not be empty'] })
    }
  }
  validateForm = () => {
    const { value } = this.state;
    const trimmedValue = value.trim();
    const newErrors = [];
    // let isValid = true;
    if (!trimmedValue.length) {
      newErrors.push('chirps must not be empty');
    }
    if (trimmedValue.length > 70) {
      newErrors.push('chirps must not be longer than 70');
    }
    if (trimmedValue.includes('bawk')) {
      newErrors.push('Chirp must not contain profanity');
    }
    this.setState({ errors: newErrors })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.errors.length || !this.state.dirty) return;
    this.props.addChirp(this.state.value);
    this.setState({ value: '' })
  }
  render() {
    const { errors, dirty, value } = this.state;
    const buttonDisabled = errors.length > 0 || !dirty;
    return (
      <div>
        <h4>New Chirp</h4>
        <form onSubmit={this.handleSubmit}>
          <textarea
            name="chirpText"
            type="text"
            value={value}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Chirp"
            disabled={buttonDisabled}
          />
        </form>
        <ul>
          {errors.map(error => {
            return (
              <li className="errorMsg" key={error}>{error}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
