import * as actionTypes from '../constants/userConstants';

export const userReducerSignIn = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGNIN_REQUEST:
      return { loading: true, userInfo: null, isAuthenticated: false };
    case actionTypes.USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true,
      };
    case actionTypes.USER_SIGNIN_FAIL:
      return {
        loading: false,
        userInfo: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case actionTypes.USER_SIGNIN_RESET:
      return {};
    default:
      return state;
  }
};

//User SignUp Reducer
export const userReducerSignUp = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGNUP_REQUEST:
      return { loading: true, userInfo: null, isAuthenticated: false };
    case actionTypes.USER_SIGNUP_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true,
      };
    case actionTypes.USER_SIGNUP_FAIL:
      return {
        loading: false,
        userInfo: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case actionTypes.USER_SIGNUP_RESET:
      return {};
    default:
      return state;
  }
};

//user profile
export const userReducerProfile = (state = { user: null }, action) => {
  switch (action.type) {
    case actionTypes.USER_LOAD_REQUEST:
      return { loading: true, user: null };
    case actionTypes.USER_LOAD_SUCCESS:
      return {
        loading: false,
        user: action.payload.user,
      };
    case actionTypes.USER_LOAD_FAIL:
      return { loading: false, user: null, error: action.payload };
    case actionTypes.USER_LOAD_RESET:
      return {};
    default:
      return state;
  }
};

//log out reducer
export const userReducerLogout = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGOUT_REQUEST:
      return { loading: true };
    case actionTypes.USER_LOGOUT_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case actionTypes.USER_LOGOUT_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.USER_LOGOUT_RESET:
      return {};
    default:
      return state;
  }
};

//Apply for job reducer
export const userApplyJobReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_JOB_APPLY_REQUEST:
      return { loading: true };
    case actionTypes.USER_JOB_APPLY_SUCCESS:
      return {
        loading: false,
        userJob: action.payload,
      };
    case actionTypes.USER_JOB_APPLY_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.USER_JOB_APPLY_RESET:
      return {};
    default:
      return state;
  }
};

//All users reducer
export const allUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case actionTypes.ALL_USERS_LOAD_REQUEST:
      return { loading: true };
    case actionTypes.ALL_USERS_LOAD_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
      };
    case actionTypes.ALL_USERS_LOAD_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.ALL_USERS_LOAD_RESET:
      return {};
    default:
      return state;
  }
};
