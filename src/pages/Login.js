import React from 'react';
import PropTypes from 'prop-types';
import { validacaoEmail } from '../tests/helpers/validEmail';

class Login extends React.Component {
  state = {
    email: '',
    emailValidation: false,
    password: '',
    passwordValidation: false,
    active: true,
    minPassword: 6,
  };

  activeButton = () => {
    const { emailValidation, passwordValidation } = this.state;
    if (emailValidation === true && passwordValidation === true) {
      this.setState({ active: false });
    } else {
      this.setState({ active: true });
    }
  }

  handleOnChangePassword = (e) => {
    const { value } = e.target;
    this.setState({ password: value }, () => {
      const { password, minPassword } = this.state;
      if (password.length >= minPassword) {
        this.setState({ passwordValidation: true }, () => {
          this.activeButton();
        });
      } else {
        this.setState({ passwordValidation: false }, () => {
          this.activeButton();
        });
      }
    });
  };

  handleOnChangeEmail= (e) => {
    const { value } = e.target;
    this.setState({ email: value });
    const { email } = this.state;
    const emailActive = validacaoEmail(email);
    if (emailActive) {
      this.setState({ emailValidation: true }, () => {
        this.activeButton();
      });
    } else {
      this.setState({ emailValidation: false }, () => {
        this.activeButton();
      });
    }
  }

  handleOnClick = () => {
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    const { active, password, email } = this.state;
    return (
      <div>
        <input
          name="email"
          type="text"
          data-testid="email-input"
          onChange={ this.handleOnChangeEmail }
          value={ email }
        />
        <input
          type="password"
          data-testid="password-input"
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

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
