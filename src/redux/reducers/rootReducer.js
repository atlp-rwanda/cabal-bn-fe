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
import {
  fetchSingleAccommodationReducer,
  fetchAllAccommodations,
  createAccommodationReducer,
  deleteAccommodationReducer,
  updateAccommodationReducer,
  fetchCommentsReducer,
} from './accommodation.reducer';

const rootReducer = combineReducers({
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
  forgot,
  Reset,
  accommodationReducer,
  requestsReducer,
  profileReducer,
  accommodationComments: fetchCommentsReducer,
});
export default rootReducer;
