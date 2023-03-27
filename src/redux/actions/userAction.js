import axios from 'axios';
import { toast } from 'react-toastify';
import AxiosInstance from '../../apiHelper/AxiosInstance';
import * as actionTypes from '../constants/userConstants';

export const userSignInAction = (user) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_SIGNIN_REQUEST });
  try {
    const { data } = await AxiosInstance.post(`/api/signin`, user);
    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch({
      type: actionTypes.USER_SIGNIN_SUCCESS,
      payload: data,
    });
    toast.success('Login Successfully!');
  } catch (error) {
    console.log({ error });
    dispatch({
      type: actionTypes.USER_SIGNIN_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

export const userSignUpAction = (user) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_SIGNUP_REQUEST });
  try {
    const { data } = await AxiosInstance.post(`/api/signup`, user);
    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch({
      type: actionTypes.USER_SIGNUP_SUCCESS,
      payload: data,
    });
    toast.success('Registered Successfully!');
  } catch (error) {
    dispatch({
      type: actionTypes.USER_SIGNUP_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

//log out action
export const userLogoutAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.USER_LOGOUT_REQUEST });
  try {
    const { data } = await AxiosInstance.get(`/api/logout`);
    localStorage.removeItem('userInfo');
    dispatch({
      type: actionTypes.USER_LOGOUT_SUCCESS,
      payload: data,
    });
    toast.success('Log out successfully!');
  } catch (error) {
    dispatch({
      type: actionTypes.USER_LOGOUT_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

//user profile action
export const userProfileAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.USER_LOAD_REQUEST });
  try {
    const { data } = await AxiosInstance.get(`/api/me`);
    dispatch({
      type: actionTypes.USER_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.USER_LOAD_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const userApplyJobAction = (job) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_JOB_APPLY_REQUEST });
  try {
    const { data } = await AxiosInstance.post(`/api/user/jobhistory`, job);
    dispatch({
      type: actionTypes.USER_JOB_APPLY_SUCCESS,
      payload: data,
    });
    toast.success('Applied Successfully!');
  } catch (error) {
    dispatch({
      type: actionTypes.USER_JOB_APPLY_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

//Get all users action
export const allUsersAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.ALL_USERS_LOAD_REQUEST });
  try {
    const { data } = await AxiosInstance.get(`/api/allusers`);
    dispatch({
      type: actionTypes.ALL_USERS_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ALL_USERS_LOAD_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};
