import { GET_LOCATIONS, ERR_GETTING_LOCATIONS } from '../types/location.types';

const initialState = {
  data: [],
  loading: true,
  error: '',
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return { ...state, data: action.payload, loading: false };
    case ERR_GETTING_LOCATIONS:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
