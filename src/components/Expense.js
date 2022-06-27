import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Expense extends React.Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheio',
    tag: 'Alimentação',
    // exchangeRates: {},
  }

  handleOnChange = (e) => {
    const { target: { value, name } } = e;
    this.setState({ [name]: value });
  }

  handleOnClick = () => {
    this.newID();
  }

  newID=() => {
    const { id } = this.state;
    this.setState({ id: id + 1 });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            id="valor"
            value={ value }
            name="value"
            type="number"
            data-testid="value-input"
            onChange={ this.handleOnChange }
          />
        </label>
        <label htmlFor="descrição">
          descrição
          <input
            value={ description }
            id="descrição"
            type="text"
            name="description"
            data-testid="description-input"
            onChange={ this.handleOnChange }
          />
        </label>
        <label htmlFor="Moeda">
          moeda
          <select
            value={ currency }
            id="Moeda"
            name="currency"
            onChange={ this.handleOnChange }
          >
            {currencies.map((element) => (
              <option key={ element }>{element}</option>
            ))}
          </select>
        </label>
        <select
          name="method"
          value={ method }
          data-testid="method-input"
          onChange={ this.handleOnChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select
          name="tag"
          value={ tag }
          onChange={ this.handleOnChange }
          data-testid="tag-input"
        >
          <option>Alimentação</option>
          <option>Trabalho</option>
          <option>Lazer</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>

        <button
          type="button"
          onClick={ this.handleOnClick }
        >
          Adicionar despesa
        </button>

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
