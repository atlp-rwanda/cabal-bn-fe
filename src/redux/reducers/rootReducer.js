import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { signupReducer } from './signup.reducer';
import { locationReducer } from './location.reducer';
import { emailVerificationReducer } from './verification.reducer';

const rootReducer = combineReducers({
  userReducer,
  signupReducer,
  locationReducer,
  emailVerificationReducer,
});

export default rootReducer;
