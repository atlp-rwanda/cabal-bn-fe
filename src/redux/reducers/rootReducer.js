/* eslint-disable import/no-duplicates */
import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { signupReducer } from './signup.reducer';
import { locationReducer } from './location.reducer';
import landingReducer from './locations.reducer';
import { emailVerificationReducer } from './verification.reducer';
import { forgot } from './ForgotReducer';
import { Reset } from './ResetPasswordReducer';
import accommodationReducer from './accommodation.reducer';

const rootReducer = combineReducers({
  userReducer,
  signupReducer,
  locationReducer,
  landingReducer,
  emailVerificationReducer,
  forgot,
  Reset,
  accommodationReducer,
});

export default rootReducer;
