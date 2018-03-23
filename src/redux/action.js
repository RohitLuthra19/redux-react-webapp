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

export const getMedicineOrdersRequest =  medicineOrdersRequest =>({
    type: 'GET_MEDICINE_ORDER',
    medicineOrdersRequest
})

export const getMedicineOrdersSuccess=  orders =>({
    type: 'GET_MEDICINE_ORDER_SUCCESS',
    orders
})

export const getMedicineOrdersfailure=  error =>({
    type: 'GET_MEDICINE_ORDER_FAILURE',
    error
})

export const getHomecareOrdersRequest =  homecareOrdersRequest =>({
    type: 'GET_HOMECARE_ORDER',
    homecareOrdersRequest
})

export const getHomecareOrdersSuccess=  orders =>({
    type: 'GET_HOMECARE_ORDER_SUCCESS',
    orders
})

export const getHomecareOrdersfailure=  error =>({
    type: 'GET_HOMECARE_ORDER_FAILURE',
    error
})