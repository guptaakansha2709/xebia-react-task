import { SnackbarMessages } from '../constants/snackbar-messages';
import CookieManagerService from '../services/cookie.service';

class ErrorService {

    static getErrorMessage(error, msg) {
        let message = msg;
        if (error && error.response && error.response.status === 401) {
            CookieManagerService.clearCookie();
            message = error.response.statusText;
        }
        if (!message && error && error.response && error.response.data) {
            if (error.response.data.error || error.response.data.error_description || error.response.data.statusMessage) {
                message = error.response.data.error || error.response.data.error_description || error.response.data.statusMessage;
            } else if (error.response.data.status && error.response.data.status.statusMessage) {
                message = error.response.data.status.statusMessage;
            }
        }
        message = message || SnackbarMessages.DEFAULT_ERROR_MSG;
        return message;
    }
}

export default ErrorService;
