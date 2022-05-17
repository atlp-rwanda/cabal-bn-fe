import { SIGNUP_FAILED, SIGNUP_SUCCESSFUL } from '../types/signup.types';
import axios from '../../axios/axios.instance';

export const signupSucces = (data) => {
  return {
    type: SIGNUP_SUCCESSFUL,
    payload: data,
    loading: false,
  };
};
export const signupFail = (error) => {
  return { type: SIGNUP_FAILED, payload: error, loading: false };
};

export const SignupAction = (userData) => {
  return async (dispatch) => {
    await axios(`/users/register`, {
      method: 'POST',
      data: userData,
    })
      .then((res) => {
        res.data.status === 201
          ? dispatch(signupSucces(res.data))
          : dispatch(signupFail(res.data));
      })
      .catch((error) => {
        dispatch(signupFail(error.response.data));
      });
  };
};
