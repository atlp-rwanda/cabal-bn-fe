import {
  RESETPASSWORD,
  RESETPASSWORD_FAILED,
  RESETPASSWORD_SUCCESS,
} from '../types/ResetPasswordType';

const initialState = {
  loading: false,
  error: {},
  data: {},
};

export const Reset = (state = initialState, { type, payload }) => {
  switch (type) {
    case RESETPASSWORD: {
      return { ...state, loading: true };
    }
    case RESETPASSWORD_FAILED: {
      return { ...state, error: payload, loading: false };
    }
    case RESETPASSWORD_SUCCESS: {
      return { ...state, data: payload, loading: false };
    }
    default: {
      return state;
    }
  }
};
