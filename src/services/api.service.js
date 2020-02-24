import CustomHttpService from './custom-http.service';
import Config from '../config/config';
import EncodeDecodeType from '../actiontype/encode-decode-type';
import CookieManagerService from './cookie.service';

export default class ApiService {

    static checkAuthToken(authToken) {
        let url = Config.authPath + `oauth/check_token?token=${authToken}`
        return CustomHttpService.get(url, {}, EncodeDecodeType.DEFAULT);
    }
    static userLogout() {
        const config = {
            headers: {
            }
        };
        let url = Config.servicePath + `token/logout`
        return CustomHttpService.delete(url, config, EncodeDecodeType.DEFAULT);
    }

}