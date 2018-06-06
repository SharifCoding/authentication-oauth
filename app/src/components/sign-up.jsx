import React from 'react';
import axios from 'axios';
import { FormErrors } from '../utils/errors';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      firstNameValid: false,
      lastNameValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState(
      { [name]: value },
      () => { this.validateField(name, value); },
    );
  }

  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstNameValid; // eslint-disable-line prefer-destructuring
    let lastNameValid = this.state.lastNameValid; // eslint-disable-line prefer-destructuring
    let emailValid = this.state.emailValid; // eslint-disable-line prefer-destructuring
    let passwordValid = this.state.passwordValid; // eslint-disable-line prefer-destructuring

    switch (fieldName) {
      case 'firstName':
        firstNameValid = value.length >= 1;
        fieldValidationErrors.firstName = firstNameValid ? '' : ' is too short';
        break;
      case 'lastName':
        lastNameValid = value.length >= 2;
        fieldValidationErrors.lastName = lastNameValid ? '' : ' is too short';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      firstNameValid,
      lastNameValid,
      emailValid,
      passwordValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.firstNameValid
      && this.state.lastNameValid
      && this.state.emailValid
      && this.state.passwordValid,
    });
  }

  handleLogin() {
    axios.post('http://127.0.0.1:3000/users', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    })
      .then(() => {
        this.props.history.push('/login');
      });
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div className={`firstNameForm ${this.state.formErrors.firstName}`}>
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div className={`lastNameForm ${this.state.formErrors.lastName}`}>
          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div className={`emailForm ${this.state.formErrors.email}`}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div className={`passwordForm ${this.state.formErrors.password}`}>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
          <button
            onClick={() => this.state.handleSubmit}
            disabled={!this.state.formValid}
          >
          Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default SignUp;
