import getCurrencies from '../funcs/currencies';

export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const fetchCurrenciesSucess = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: currencies,
});

export const fetchCurrenciesThunk = () => async (dispatch) => {
  const response = await getCurrencies();
  const result = Object.keys(response);
  const listResult = result.filter((elemnet) => elemnet !== 'USDT');
  dispatch(fetchCurrenciesSucess(listResult));
};

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});
