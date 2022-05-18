import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { signupReducer } from './signup.reducer';
import { locationReducer } from './location.reducer';
import { emailVerificationReducer } from './verification.reducer';
import { forgot } from './ForgotReducer';
import { Reset } from './ResetPasswordReducer';

const rootReducer = combineReducers({
  userReducer,
  signupReducer,
  locationReducer,
  emailVerificationReducer,
  forgot,
  Reset,
});

export default rootReducer;
