/* eslint-disable import/no-duplicates */
import { combineReducers } from 'redux';
import { userReducer, loggedInUserReducer } from './userReducer';
import { signupReducer } from './signup.reducer';
import { locationReducer } from './location.reducer';
import landingReducer from './locations.reducer';
import { emailVerificationReducer } from './verification.reducer';
import { forgot } from './ForgotReducer';
import { Reset } from './ResetPasswordReducer';
import accommodationReducer from './accommodation.reducer';
import { requestsReducer } from './requesterDashboard';
import { profileReducer } from './profileReducer';
import { assignRoleReducer } from './user_role_settings.reducer';
import { getRoleReducer } from './get_roles_reducer';
import { getUserReducer } from './get_users_reducer';
import {
  fetchSingleAccommodationReducer,
  fetchAllAccommodations,
  createAccommodationReducer,
  deleteAccommodationReducer,
  updateAccommodationReducer,
} from './accommodation.reducer';
import { createRoomReducer, fetchRoomsReducer } from './room.reducer';
import {
  createBookingReducer,
  fetchAllBookingsReducer,
} from './booking.reducer';

const rootReducer = combineReducers({
  getUserReducer,
  getRoleReducer,
  loggedInUser: loggedInUserReducer,
  userReducer,
  signupReducer,
  locationReducer,
  landingReducer,
  emailVerificationReducer,
  fetchAllAccommodations,
  fetchSingleAccommodationReducer,
  createAccommodationReducer,
  updateAccommodationReducer,
  deleteAccommodationReducer,
  createRoomReducer,
  fetchRoomsReducer,
  createBookingReducer,
  fetchAllBookingsReducer,
  forgot,
  Reset,
  accommodationReducer,
  requestsReducer,
  profileReducer,
  assignRoleReducer,
});
export default rootReducer;
