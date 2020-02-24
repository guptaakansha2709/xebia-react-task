
import { AppActionType } from '../actiontype/app.actiontype';
import ErrorService from '../services/error.service';

export const closeSnackbarRequest = data => ({
  type: AppActionType.CLOSE_SNACKBAR,
  payload: { open: false }
});

export const openSnackbarRequest = (error, msg) => dispatch => {
  const message = ErrorService.getErrorMessage(error, msg);
  dispatch({
    type: AppActionType.OPEN_SNACKBAR,
    payload: { message, open: true }
  })
}