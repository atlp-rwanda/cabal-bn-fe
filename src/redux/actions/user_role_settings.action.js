import { toast } from 'react-toastify';
import axiosInstance from '../../axios/axios.instance';
import {
  ASSIGNROLE,
  ASSIGNROLEERROR,
  GETALLROLES,
  GETUSERS,
} from '../types/user_role_settings.types';

export const assignRoleAction = (payload) => ({
  type: ASSIGNROLE,
  payload,
});

export const assignRoleActionError = (payload) =>
  /* istanbul ignore next */
  ({
    type: ASSIGNROLEERROR,
    payload,
  });

export const getRolesAction = (payload) => ({
  type: GETALLROLES,
  payload,
});

export const assign = (data) => async (dispatch) => {
  try {
    await axiosInstance.patch('/users/assignRole', data).then((res) => {
      dispatch(assignRoleAction(res.data.message));
      toast.success(res.data.message);
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(assignRoleActionError(error.response.data.message));
  }
};

export const getAll = () => async (dispatch) => {
  try {
    await axiosInstance.get('/users/getRoles').then((res) => {
      dispatch(getRolesAction(res.data.data));
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    await dispatch({
      type: GETUSERS,
    });
    const res = await axiosInstance(`/users`, { method: 'GET' });
    const users = res.data.data.map((user) => user.email);
    await dispatch({
      type: GETUSERS,
      payload: users,
    });
  } catch (err) {
    console.log(err);
  }
};
