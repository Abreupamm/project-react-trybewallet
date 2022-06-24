import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    // const { user: { email } } = this.props;
    // console.log(email);
    const { email } = this.props;
    return (
      <div>
        <span
          data-testid="email-field"
        >
          {email}
        </span>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
        <span
          data-testid="total-field"
        >
          Total gasto:
          {0}
        </span>
      </div>
    );
  }
}
// const mapStateToProps = (state) => ({
//   user: state.user,
// });

Header.propTypes = {
  email: PropTypes.string.isRequired,
  // user: PropTypes.exact({
  //   email: PropTypes.string.isRequired,
  // }).isRequired,
};
export default Header;
