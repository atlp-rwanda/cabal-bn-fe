import { LOGIN_USER } from '../types/login.types';

export const userLogin = (data) => ({
  type: LOGIN_USER,
  payload: data,
  isLogged: true,
  loading: false,
});

export const socialLoginAction = (data) => async (dispatch) => {
  localStorage.setItem('userCredentials', JSON.stringify(data));
  dispatch(userLogin(data));
};
