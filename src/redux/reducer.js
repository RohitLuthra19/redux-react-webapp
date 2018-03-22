import { combineReducers } from 'redux';// eslint-disable-next-line 
import { routerReducer } from 'react-router-redux'

// reducers.js
export const reducer = (state = {
  isLoginPending: false,
  isLoginSuccess: false,
  loginError: null
}, action) => {
  switch (action.type) {
    case 'SET_LOGIN_PENDING':
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginPending
      });
    case 'SET_LOGIN_SUCCESS':
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });
    case 'SET_LOGIN_ERROR':
      return Object.assign({}, state, {
        isLoginSuccess: action.loginError
      });
    case 'SET_LOGOUT':
      return {};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  reducer,
  routing: routerReducer
});