import user from './user';
import wallet from './wallet';
import { ADD_EMAIL } from '../actions';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const initialState = {
  user,
  wallet,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_EMAIL:
    return {...state, 
      action.email,
    };
  default:
    return state;
  }
};
export default reducer;
