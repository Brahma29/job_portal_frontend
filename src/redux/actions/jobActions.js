import axios from 'axios';
import * as actionTypes from '../constants/jobConstants';

export const jobLoadAction =
  (pageNumber, keyword, cat, loaction) => async (dispatch) => {
    dispatch({ type: actionTypes.JOB_LOAD_REQUEST });
    try {
      const { data } = await axios.get(`/api/jobs/show`, {
        params: {
          pageNumber,
          keyword,
          cat,
          loaction,
        },
      });
      dispatch({ type: actionTypes.JOB_LOAD_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: actionTypes.JOB_LOAD_FAILED,
        payload: err.response.data.error,
      });
    }
  };

export const jobLoadSingleAction = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.SINGLE_JOB_LOAD_REQUEST });
  try {
    const { data } = await axios.get(`/api/job/${id}`);
    dispatch({ type: actionTypes.SINGLE_JOB_LOAD_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: actionTypes.SINGLE_JOB_LOAD_FAILED,
      payload: err.response.data.error,
    });
  }
};
