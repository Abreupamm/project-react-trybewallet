import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user: { email } } = this.props;
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

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
