import * as actionTypes from '../constants/jobTypeConstants';

export const loadJobTypesReducer = (state = { jobTypes: [] }, action) => {
  switch (action.type) {
    case actionTypes.JOB_TYPE_LOAD_REQUEST:
      return { loading: true };
    case actionTypes.JOB_TYPE_LOAD_SUCCESS:
      return {
        loading: false,
        jobTypes: action.payload.jobTypes,
      };
    case actionTypes.JOB_TYPE_LOAD_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.JOB_TYPE_LOAD_RESET:
      return {};
    default:
      return state;
  }
};
