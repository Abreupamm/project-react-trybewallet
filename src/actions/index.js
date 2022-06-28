import getCurrencies from '../funcs/currencies';

export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXCHANGE_RATE = 'ADD_EXCHANGE_RATE';

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

export const getExchangeRateTunckSucess = (currency) => ({
  type: ADD_EXCHANGE_RATE,
  payload: currency,
});

export const getExchangeRateTunck = (currency) => async () => {
  const response = await getCurrencies();
  return { code: response[currency].code,
    name: response[currency].name,
    ask: response[currency].ask,
  };
};
