import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Expense from '../components/Expense';
import { fetchCurrenciesThunk } from '../actions';

class Wallet extends React.Component {
componentDidMount = () => {
  const { dispatch } = this.props;
  dispatch(fetchCurrenciesThunk());
}

render() {
  return (
    <div>
      <Header />
      <Expense />
      TrybeWallet
    </div>
  );
}
}

// const mapStateToProps = (state) => ({
//   user: state.user,
// });

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Wallet);
