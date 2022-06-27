import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchCurrenciesThunk } from '../actions';

class Wallet extends React.Component {
componentDidMount = () => {
  const { dispatch } = this.props;
  dispatch(fetchCurrenciesThunk());
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
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Wallet);
