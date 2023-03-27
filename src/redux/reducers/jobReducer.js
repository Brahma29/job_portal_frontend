import * as actionTypes from '../constants/jobConstants';

export const loadJobsReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case actionTypes.JOB_LOAD_REQUEST:
      return { loading: true };
    case actionTypes.JOB_LOAD_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        page: action.payload.page,
        pages: action.payload.pages,
        count: action.payload.count,
        setUniqueLocation: action.payload.setUniqueLocation,
        jobs: action.payload,
      };
    case actionTypes.JOB_LOAD_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.JOB_LOAD_RESET:
      return {};
    default:
      return state;
  }
};

export const loadSingleJobReducer = (state = { job: {} }, action) => {
  switch (action.type) {
    case actionTypes.SINGLE_JOB_LOAD_REQUEST:
      return { loading: true };
    case actionTypes.SINGLE_JOB_LOAD_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        singleJob: action.payload.job,
      };
    case actionTypes.SINGLE_JOB_LOAD_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.SINGLE_JOB_LOAD_RESET:
      return {};
    default:
      return state;
  }
};
