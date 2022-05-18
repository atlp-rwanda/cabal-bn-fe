import { LOGIN_USER } from '../types/login.types';

export const userLogin = (data) => ({
  type: LOGIN_USER,
  payload: data,
  isLogged: true,
  loading: false,
});

export const socialLoginAction = (data) => async (dispatch) => {
  localStorage.setItem('BarefootNomadToken', data.token);
  dispatch(userLogin(data));
};
