/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
import { FETCHACCOMMODATIONS } from '../actionTypes/actionTypes';
import {
  FETCH_ACCOMMODATIONS_PENDING,
  FETCH_ACCOMMODATIONS_SUCCESS,
  FETCH_ACCOMMODATIONS_FAILED,
  CREATE_ACCOMMODATION_PENDING,
  CREATE_ACCOMMODATION_SUCCESS,
  CREATE_ACCOMMODATION_FAILED,
  FETCH_SINGLE_ACCOMMODATION_FAILED,
  FETCH_SINGLE_ACCOMMODATION_SUCCESS,
  FETCH_SINGLE_ACCOMMODATION_PENDING,
  DELETE_ACCOMMODATION_PENDING,
  DELETE_ACCOMMODATION_SUCCESS,
  DELETE_ACCOMMODATION_FAILED,
  UPDATE_ACCOMMODATION_PENDING,
  UPDATE_ACCOMMODATION_SUCCESS,
  UPDATE_ACCOMMODATION_FAILED,
} from '../types/accommodation.types';

const initialState1 = {
  accommodations: [],
};

const accommodationReducer = (state = initialState1, action) => {
  switch (action.type) {
    case FETCHACCOMMODATIONS:
      return {
        ...state,
        accommodations: action.payload,
      };
    default:
      return state;
  }
};

export default accommodationReducer;

const initialState = {
  accommodations: [],
  error: null,
  pending: false,
};

const initialDeleteState = {
  pending: false,
  message: '',
  error: '',
};
/* istanbul ignore next */
export const fetchSingleAccommodationReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case FETCH_SINGLE_ACCOMMODATION_PENDING:
      return { ...state, pending: true, accommodations: {} };
    case FETCH_SINGLE_ACCOMMODATION_SUCCESS:
      return { ...state, pending: false, accommodations: action.payload };
    case FETCH_SINGLE_ACCOMMODATION_FAILED:
      return {
        ...state,
        pending: false,
        accommodations: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
/* istanbul ignore next */
export const createAccommodationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOMMODATION_PENDING:
      return { ...state, pending: true, accommodations: [], error: null };
    case CREATE_ACCOMMODATION_SUCCESS:
      return {
        ...state,
        pending: false,
        accommodations: {
          ...state.accommodations,
          data: {
            ...state.accommodations.data,
            data: action.payload.data.data,
          },
        },
        error: null,
      };
    case CREATE_ACCOMMODATION_FAILED:
      return {
        ...state,
        pending: false,
        accommodations: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
/* istanbul ignore next */
export const fetchAllAccommodations = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOMMODATIONS_PENDING:
      return { ...state, pending: true, accommodations: [], error: null };
    case FETCH_ACCOMMODATIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        accommodations: action.payload,
        error: null,
      };
    case FETCH_ACCOMMODATIONS_FAILED:
      return {
        ...state,
        pending: false,
        accommodations: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
/* istanbul ignore next */
export const deleteAccommodationReducer = (
  state = initialDeleteState,
  action,
) => {
  switch (action.type) {
    case DELETE_ACCOMMODATION_PENDING:
      return { ...state, pending: true, error: null };
    case DELETE_ACCOMMODATION_SUCCESS:
      return { ...state, pending: false, message: action.payload, error: null };
    case DELETE_ACCOMMODATION_FAILED:
      return { ...state, pending: false, error: action.payload, message: '' };
    default:
      return state;
  }
};
/* istanbul ignore next */
export const updateAccommodationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACCOMMODATION_PENDING:
      return { ...state, pending: true, accommodations: [], error: null };
    case UPDATE_ACCOMMODATION_SUCCESS:
      return {
        ...state,
        pending: false,
        accommodations: {
          ...state.accommodations,
          data: {
            ...state.accommodations.data,
            data: action.payload,
          },
        },
        error: null,
      };
    case UPDATE_ACCOMMODATION_FAILED:
      return {
        ...state,
        pending: false,
        accommodations: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
