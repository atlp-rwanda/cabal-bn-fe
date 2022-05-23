import {
  GET_LOCATIONS,
  ERR_GETTING_LOCATIONS,
  GETLOCATIONS,
} from '../types/location.types';

import axios from '../../axios/axios.instance';

export const getLocs = (data) => ({
  type: GET_LOCATIONS,
  payload: data,
  loading: false,
});
export const errorGettingLocs = (error) => ({
  type: ERR_GETTING_LOCATIONS,
  payload: error,
  loading: false,
});
export const getAllLocations = () => async (dispatch) => {
  await axios('/locations', { method: 'GET' })
    .then((res) => {
      if (res.data.message === 'successfully found locations') {
        dispatch(getLocs(res.data));
      } else {
        /* istanbul ignore next */
        dispatch(errorGettingLocs(res.data));
      }
    })
    /* istanbul ignore next */
    .catch((err) => {
      /* istanbul ignore next */
      dispatch(errorGettingLocs(err));
    });
};

export const getLocation = (payload) => (dispatch) => {
  dispatch({
    type: GETLOCATIONS,
    payload,
  });
};
/* istanbul ignore next */
export const getLoc = () => async (dispatch) => {
  /* istanbul ignore next */
  await axios.get('/locations', { mostVisited: true }).then((res) => {
    dispatch(getLocation(res.data.data.results));
  });
};
