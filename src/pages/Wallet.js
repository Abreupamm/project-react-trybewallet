import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Expense from '../components/Expense';
import { fetchCurrenciesThunk } from '../actions';

class Wallet extends React.Component {
  state = {
    total: 0,
  }

componentDidMount = () => {
  const { dispatch } = this.props;
  dispatch(fetchCurrenciesThunk());
}

totalExpense = () => {
  const { expenses } = this.props;
  let newValue = 0;
  let valor;
  let currency;
  expenses.map((element) => {
    currency = element.currency;
    valor = element.value * element.exchangeRates[currency].ask;
    newValue += valor;
    return valor;
  });
  this.setState({ total: newValue.toFixed(2) });
}

render() {
  const { total } = this.state;
  return (
    <div>
      <Header total={ total } />
      <Expense totalFunc={ this.totalExpense } />
      TrybeWallet
    </div>
  );
}
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.objectOf(PropTypes.object).isRequired,

};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
