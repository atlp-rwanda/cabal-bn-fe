import { toast } from 'react-toastify';
import {
  FETCH_ALL_BOOKINGS_PENDING,
  FETCH_ALL_BOOKINGS_SUCCESS,
  FETCH_ALL_BOOKINGS_FAILED,
  CREATE_BOOKING_PENDING,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAILED,
} from '../types/booking.types';
import axiosInstance from '../../axios/axios.instance';

export const createBookingAction = (roomId, data) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BOOKING_PENDING });
    const res = await axiosInstance.post(`/rooms/${roomId}/booking`, data);
    dispatch({
      type: CREATE_BOOKING_SUCCESS,
      payload: res.data,
      error: null,
    });
    toast.success(res.data.message);
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({ type: CREATE_BOOKING_FAILED, payload: error.response.data });
  }
};

export const fetchAllBookingsAction = (roomId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL_BOOKINGS_PENDING });
    const res = await axiosInstance.get(`/rooms/${roomId}/booking`);
    dispatch({
      type: FETCH_ALL_BOOKINGS_SUCCESS,
      payload: res.data,
      error: null,
    });
  } catch (error) {
    // toast.error(error.response.data.message);
    dispatch({ type: FETCH_ALL_BOOKINGS_FAILED, payload: error.response.data });
  }
};
