import { ASSIGNROLE, ASSIGNROLEERROR, GETALLROLES, GETUSERS } from "../types/user_role_settings.types"

const initialState={
  error:'',
  users:[]
}

export const getUserReducer=(state=initialState,action)=>{
  switch (action.type) {
      case GETUSERS: 
        return {
          ...state,
          users:action.payload
        }
    default:
      return state
  }
}