import { GET_LOCATIONS, ERR_GETTING_LOCATIONS, GET_ONE_LOCATION } from '../types/location.types';

const initialState = {
  data: [],
  loading: true,
  error: '',
  oneLocation: [],
};

/* istanbul ignore next */
export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return { ...state, data: action.payload, loading: false };
    case ERR_GETTING_LOCATIONS:
      return { ...state, error: action.payload, loading: false };
    case GET_ONE_LOCATION:
      return { ...state, oneLocation: action.payload }
    default:
      return state;
  }
};
