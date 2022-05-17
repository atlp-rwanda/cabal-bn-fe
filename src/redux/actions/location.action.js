import { GET_LOCATIONS, ERR_GETTING_LOCATIONS } from '../types/location.types';

import axios from '../../axios/axios.instance';

export const getLocs = (data) => {
  return {
    type: GET_LOCATIONS,
    payload: data,
    loading: false,
  };
};
export const errorGettingLocs = (error) => {
  return {
    type: ERR_GETTING_LOCATIONS,
    payload: error,
    loading: false,
  };
};
export const getAllLocations = () => {
  return async (dispatch) => {
    await axios('/locations', { method: 'GET' })
      .then((res) => {
        if (res.data.message === 'successfully found locations') {
          dispatch(getLocs(res.data));
        } else {
          dispatch(errorGettingLocs(res.data));
        }
      })
      .catch((err) => {
        dispatch(errorGettingLocs(err));
      });
  };
};
