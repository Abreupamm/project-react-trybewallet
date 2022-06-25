import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getCurrencies from '../funcs/currencies';

class Wallet extends React.Component {
componentDidMount = () => {
  console.log(getCurrencies());
}

render() {
  const { user } = this.props;
  const { email } = user;
  return (
    <div>
      <Header email={ email } />
      TrybeWallet
    </div>
  );
}
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Wallet);
