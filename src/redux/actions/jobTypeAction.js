import axios from 'axios';
import * as actionTypes from '../constants/jobTypeConstants';

export const jobTypeLoadAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.JOB_TYPE_LOAD_REQUEST });
  try {
    const { data } = await axios.get(`/api/type/jobs`);
    dispatch({ type: actionTypes.JOB_TYPE_LOAD_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: actionTypes.JOB_TYPE_LOAD_FAILED,
      payload: err.response.data.error,
    });
  }
};
