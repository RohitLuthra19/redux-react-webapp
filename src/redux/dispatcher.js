import { setLoginPending, setLoginSuccess, setLoginError } from './action';
import history from './history';
import { userService } from '../services/user.service';

export function login(email, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        /* callLoginApi(email, password, error => {
            dispatch(setLoginPending(false));
            if (!error) {
                dispatch(setLoginSuccess(true));
                history.push('/dashboard');
            } else {
                dispatch(setLoginError(error));
            }
        }); */
        userService.login(email, password)
        .then(
            user => {
                dispatch(setLoginPending(false));
                dispatch(setLoginSuccess(true));
                history.push('/dashboard');
            },
            error => {
                dispatch(setLoginError(error));
            }
        );
    }
}

/* function callLoginApi(email, password, callback) {
    setTimeout(() => {
        if (email === 'admin@quark.com' && password === 'admin') {
            return callback(null);
        } else {
            return callback(new Error('Invalid email and password'));
        }
    }, 1000);
} */
