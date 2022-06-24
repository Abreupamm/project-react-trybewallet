import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <span
          data-testid="email-field"
        >
          {user.email}
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
const mapStateToProps = (state) => ({
  user: state.user,
});

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default connect(mapStateToProps)(Header);
