/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { LOGINUSER } from '../actionTypes/actionTypes';

export const getUsers = () => (dispatch) => {
  dispatch({
    type: LOGINUSER,
    payload,
  });
};
