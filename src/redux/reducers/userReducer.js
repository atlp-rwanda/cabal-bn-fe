/* eslint-disable import/named */
/* eslint-disable import/prefer-default-export */
import { LOGINUSER } from '../actionTypes/actionTypes';

const initialState = {
  users: [],
  loading: true,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGINUSER:
      return { ...state, users: action.payload, loading: false };
    default:
      return state;
  }
};
