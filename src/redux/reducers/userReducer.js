/* eslint-disable import/named */
/* eslint-disable import/prefer-default-export */
import { ERROR_LOGIN, LOGIN_USER } from '../types/login.types';

const initialState = {
  data: [],
  loading: true,
  isLogged: false,
  error: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, data: action.payload, loading: false, isLogged: true };

    case ERROR_LOGIN:
      return {
        ...state,
        error: action.payload,
        isLogged: false,
        loading: false
      }
    default:
      return state;
  }
};
