import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { loadJobsReducer, loadSingleJobReducer } from './reducers/jobReducer';
import { loadJobTypesReducer } from './reducers/jobTypeReducer';
import {
  allUsersReducer,
  userApplyJobReducer,
  userReducerProfile,
  userReducerSignIn,
} from './reducers/userReducer';

const reducer = combineReducers({
  loadJobs: loadJobsReducer,
  jobTypes: loadJobTypesReducer,
  signIn: userReducerSignIn,
  userProfile: userReducerProfile,
  singleJob: loadSingleJobReducer,
  userJobApplication: userApplyJobReducer,
  allUsers: allUsersReducer,
});

//Initial State
let initialState = {
  signIn: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
};
const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
