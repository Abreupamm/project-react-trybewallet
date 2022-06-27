import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Expense extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            id="valor"
            type="number"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="descrição">
          descrição
          <input
            id="descrição"
            type="text"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="Moeda">
          moeda
          <select
            id="Moeda"
          >
            {currencies.map((element) => (
              <option key={ element }>{element}</option>
            ))}
          </select>
        </label>
        <select data-testid="method-input">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          <option>Alimentação</option>
          <option>Trabalho</option>
          <option>Lazer</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>

      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Expense.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Expense);
