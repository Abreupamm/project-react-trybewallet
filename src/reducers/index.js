import user from './user';
import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const initialState = {
  user,
  wallet,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};
export default reducer;
