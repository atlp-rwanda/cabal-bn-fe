import { GET_COMMENTS, POST_COMMENT } from "../types/read_one.types";

const initialState = {
  comments: [],
  message:''
};

export const tripCommentReducer=(state=initialState,action)=>{
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments:action.payload
      }
    case POST_COMMENT:
      return {
        ...state,
        message:action.payload
      }
    default:
      return state
  }
}