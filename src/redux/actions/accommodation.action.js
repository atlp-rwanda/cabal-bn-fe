/* eslint-disable import/prefer-default-export */
import { FETCHACCOMMODATIONS } from '../actionTypes/actionTypes';
import axiosInstance from '../../axios/axios.instance';

export const getAccommodations = (payload) => (dispatch) => {
  dispatch({
    type: FETCHACCOMMODATIONS,
    payload,
  });
};

export const getAcc = () => async (dispatch) => {
  axiosInstance.get('/accommodations?page=1&limit=5').then((res) => {
    /* istanbul ignore next */
    dispatch(getAccommodations(res.data.data.results));
  });
};
