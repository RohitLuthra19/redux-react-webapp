// actions.js
export const setLoginPending = isLoginPending => ({
    type: 'SET_LOGIN_PENDING',
    isLoginPending
});

export const setLoginSuccess = isLoginSuccess => ({
    type: 'SET_LOGIN_SUCCESS',
    isLoginSuccess
});

export const setLoginError = loginError => ({
    type: 'SET_LOGIN_ERROR',
    loginError
});