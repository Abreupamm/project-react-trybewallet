import getCurrencies from '../funcs/currencies';

export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

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
  const result = [];
  response.map((currencie) => result.push(currencie.code));
  dispatch(fetchCurrenciesSucess(result));
};
