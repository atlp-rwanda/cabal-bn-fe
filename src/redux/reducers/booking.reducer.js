import {
  FETCH_ALL_BOOKINGS_PENDING,
  FETCH_ALL_BOOKINGS_SUCCESS,
  FETCH_ALL_BOOKINGS_FAILED,
  CREATE_BOOKING_PENDING,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAILED,
} from '../types/booking.types';

const initialState = {
  booking: [],
  pending: false,
  error: null,
};
/* istanbul ignore next */
export const fetchAllBookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_BOOKINGS_PENDING:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case FETCH_ALL_BOOKINGS_SUCCESS:
      return {
        ...state,
        pending: false,
        booking: action.payload,
        error: null,
      };
    case FETCH_ALL_BOOKINGS_FAILED:
      return {
        ...state,
        pending: false,
        booking: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
/* istanbul ignore next */
export const createBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOKING_PENDING:
      return { ...state, pending: true, booking: [], error: null };
    case CREATE_BOOKING_SUCCESS:
      return {
        ...state,
        pending: false,
        booking: action.payload,
        error: null,
      };
    case CREATE_BOOKING_FAILED:
      return {
        ...state,
        pending: false,
        booking: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
