import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    active: true,
  };

  handleOnChangePassword = (e) => {
    const { value } = e.target;
    this.setState({ password: value }, () => {
      const { password } = this.state;
      const numberMin = 6;
      if (password.length >= numberMin) {
        this.setState({ active: false });
      }
    });
  };

  handleOnChangeEmail= (e) => {
    const { value } = e.target;
    this.setState({ email: value });
  }

  // handleOnClick = () => {
  // }

  render() {
    const { active, password, email } = this.state;
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          onChange={ this.handleOnChangeEmail }
          value={ email }
        />
        <input
          type="password"
          data-testid="password-input"
          minLength="6"
          onChange={ this.handleOnChangePassword }
          value={ password }
        />
        <button
          type="button"
          onClick={ this.handleOnClick }
          disabled={ active }
        >
          Entrar
        </button>
      </div>);
  }
}

export default Login;
