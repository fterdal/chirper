import React, { Component } from 'react';

export default class ChirpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', // This is the value from the form field
      errors: [],
      dirty: false, // The dirty flag indicates whether the form has been
                    // touched by the user yet. We don't want to complain about
                    // an empty field if they haven't started typing yet.
    }
  }
  handleSubmit = (evt) => {
    // preventDefault prevents the browser from refreshing on form submit
    evt.preventDefault();
    const { errors, value, dirty } = this.state;
    if (errors.size || !dirty) return; // If the form has any errors, or hasn't
                                       // been touched yet, don't add the chirp
    this.props.addChirp(value);
    this.setState({ value: '', dirty: false, errors: [] });
  }
  handleChange = (evt) => {
    // Passing a callback as the second argument to setState allows us to
    // run that function once the state has finished being updated
    this.setState({
      value: evt.target.value,
      dirty: true,
    }, this.validateForm)
  }
  validateForm = () => {
    const { value, dirty } = this.state;
    const newErrors = [];
    let isValid = true;
    if (!value) {
      isValid = false;
      if (!dirty) return isValid;
      newErrors.push('Chirp must not be empty');
    }
    if (value.length > 140) {
      newErrors.push('Chirp must not be longer than 140');
      isValid = false;
    }
    if (value.includes('bawk')) {
      newErrors.push('Chirp must not contain profanity');
      isValid = false;
    }
    this.setState({ errors: newErrors })
    return isValid;
  }
  render() {
    const { state: { value, errors }, handleChange, handleSubmit } = this;
    const errorsList = errors.length ? (
      <ul>
        {errors.map(error => <li className="errorMsg" key={error.length}>{error}</li>)}
      </ul>
    ) : null;
    return (
      <div>
        <h4>New Chirp</h4>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div>
            <textarea
              name="chirpText"
              type="text"
              value={value}
              onChange={handleChange}
            />
            <input
              className="button"
              type="submit"
              disabled={errors.length}
              value="Chirp"
            />
          </div>
        </form>
        {errorsList}
      </div>
    )
  }
}
