import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validacaoEmail from '../funcs/validEmail';
import { addEmail } from '../actions';
import walletIcon from '../images/page-banner-fundo-adesivo-vetor.jpg';
import '../App.css';

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

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      if (name === 'email') {
        this.validationEmail();
      } else {
        this.validationPassword();
      }
    });
  }

  validationPassword = () => {
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
  };

  validationEmail= () => {
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
    const { email } = this.state;
    const { history, dispatch } = this.props;
    dispatch(addEmail(email));
    history.push('/carteira');
  }

  render() {
    const { active, password, email } = this.state;
    return (
      <div className="container-login">
        <img src={ walletIcon } alt="icon" />
        <h2>Minha Carteira</h2>
        <div className="container-form">
          <input
            name="email"
            type="text"
            data-testid="email-input"
            onChange={ this.handleOnChange }
            value={ email }
            placeholder="E-mail"
          />
          <input
            name="password"
            type="password"
            data-testid="password-input"
            onChange={ this.handleOnChange }
            value={ password }
            placeholder="digite uma senha"
          />
          <button
            type="button"
            onClick={ this.handleOnClick }
            disabled={ active }
          >
            Entrar
          </button>
        </div>
      </div>);
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
