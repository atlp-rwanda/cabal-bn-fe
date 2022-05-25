import { ASSIGNROLE, ASSIGNROLEERROR } from "../types/user_role_settings.types"

const initialState={
  message:'',
  error:'',
}

export const assignRoleReducer=(state=initialState,action)=>{
  switch (action.type) {
    case ASSIGNROLE:
      return {
        ...state,
        message:action.payload
      }
    case ASSIGNROLEERROR:
      return {
        ...state,
        error:action.payload
      }
    default:
      return state
  }
}