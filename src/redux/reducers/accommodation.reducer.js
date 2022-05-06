/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
import { FETCHACCOMMODATIONS } from "../actionTypes/actionTypes";

const initialState = {
  accommodations: [],
};

const accommodationReducer=(state=initialState, action) => {
  switch (action.type) {
    case FETCHACCOMMODATIONS:
      return {
        ...state,
        accommodations: action.payload
      }
    default:
      return state;
  }
}

export default accommodationReducer;
