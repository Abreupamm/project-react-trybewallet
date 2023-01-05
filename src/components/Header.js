import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user: { email }, total } = this.props;
    return (
      <div>
        <span
          data-testid="email-field"
        >
          {`E-mail: ${email}`}
        </span>
        {/* <span
          data-testid="header-currency-field"
        >
        </span> */}
        <span>Total gasto:</span>
        <span
          data-testid="total-field"
        >
          {`${total.toLocaleString('pt-br',
            { style: 'currency', currency: 'BRL' })}  BRL`}
        </span>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
