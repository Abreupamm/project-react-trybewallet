import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  newValue = (obj) => {
    const convertedValue = obj.value * obj.exchangeRates[obj.currency].ask;
    return convertedValue.toFixed(2);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {expenses.map((obj) => (
          <tr key={ obj.id }>
            <td>{obj.description}</td>
            <td>{obj.tag}</td>
            <td>{obj.method}</td>
            <td>{Number(obj.value).toFixed(2)}</td>
            <td>{obj.exchangeRates[obj.currency].name}</td>
            <td>{Number(obj.exchangeRates[obj.currency].ask).toFixed(2)}</td>
            <td>{this.newValue(obj)}</td>
            <td>Real</td>
            <td>{}</td>
          </tr>
        ))}
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Table);
