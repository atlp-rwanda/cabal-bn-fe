import { toast } from "react-toastify"
import axiosInstance from "../../axios/axios.instance"
import { GET_COMMENTS, POST_COMMENT } from "../types/read_one.types"

export const getCommentsAction=(payload)=>{
  return {
    type: GET_COMMENTS,
    payload
  }
}

export const postCommentAction=(payload)=>{
  return {
    type: POST_COMMENT,
    payload
  }
}

export const getComments=(id)=>async(dispatch)=>{
 const res= await axiosInstance.get(`/trips/${id}/comment`)
 console.log(res)
 dispatch(getCommentsAction(res.data.data.results))
}

export const postComment=(id,comment)=>async(dispatch)=>{
  try {
  await axiosInstance.post(`/trips/${id}/comment`,{comment}).then(res=>{
    dispatch(postCommentAction(res.data.message))
  }).catch(err=>{
    toast.error(err.response.data.message)
  })
  
  } catch (err) {
    console.log(err)
  }
  
}