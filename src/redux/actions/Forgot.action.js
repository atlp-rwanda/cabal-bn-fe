import axios from '../../axios/axios.instance';
import {
  FORGOTPASSWORD,
  FORGOTPASSWORD_SUCCESS,
  FORGOTPASSWORD_FAILED,
} from '../types/ForgotType';

export const sendEmail = (email) => async (dispatch) => {
  try {
    dispatch({
      type: FORGOTPASSWORD,
      payload: 'loading',
    });
    const data = await axios.post('/users/forgot-password', { email },);
    dispatch({
      type: FORGOTPASSWORD_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: FORGOTPASSWORD_FAILED,
      payload: error.response.data,
    });
  }
};
