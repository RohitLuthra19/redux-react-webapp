import { combineReducers } from 'redux';// eslint-disable-next-line 

// reducers.js
export const loginProcess = (state = {
  isLoginPending: false,
  isLoginSuccess: false,
  loginError: null
}, action) => {
  switch (action.type) {
    case 'SET_LOGIN_PENDING':
      return action.isLoginPending;
    case 'SET_LOGIN_SUCCESS':
      return action.isLoginSuccess;
    case 'SET_LOGIN_ERROR':
      return action.loginError;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  loginProcess,
});

/*
// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore(); */
