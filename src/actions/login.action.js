
import { LoginActionType } from "../actiontype/login.actiontype";
import LoginService from '../services/login.service';
import { openSnackbarRequest } from './snackbar.action';
import { SnackbarMessages } from '../constants/snackbar-messages';
import { resetState } from "../actions/common.action";
let snackbarMessage = {}

export const fetchLoginData = loginObj => dispatch => {
    dispatch(resetState());
    dispatch(loginApiLoading());
    LoginService.fetchLoginApi(loginObj).then(
        response => {
            if (response && response.data) {
                LoginService.loginDataHandler(response.data);
                dispatch(loginApiSuccess(response));
                dispatch(openSnackbarRequest(null, SnackbarMessages.LOGIN_SUCCESS_MSG));
            }
        },
        error => {
            dispatch(loginApiFailure(error));
            dispatch(openSnackbarRequest(error, SnackbarMessages.LOGIN_FAILURE));
        }
    );
}
function loginApiLoading() {
    return {
        type: LoginActionType.LOGIN_REQUEST
    }
}
export function loginApiSuccess(response) {
    return {
        type: LoginActionType.LOGIN_SUCCESS,
        payload: response.data
    }
}
export function loginApiFailure(error) {
    return {
        type: LoginActionType.LOGIN_FAILURE,
        payload: error
    }
}
