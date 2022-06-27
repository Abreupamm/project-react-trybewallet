// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_EMAIL } from '../actions';

const initialState = {
  email: '', // string que armazena o email da pessoa usuária
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case ADD_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
