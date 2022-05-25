import { ASSIGNROLE, ASSIGNROLEERROR, GETALLROLES } from "../types/user_role_settings.types"

const initialState={
  error:'',
  roles:[]
}

export const getRoleReducer=(state=initialState,action)=>{
  switch (action.type) {
      case GETALLROLES: 
        return {
          ...state,
          roles:action.payload
        }
    default:
      return state
  }
}