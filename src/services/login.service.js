import CustomHttpService from './custom-http.service';
import Config from '../config/config';

import EncodeDecodeType from '../actiontype/encode-decode-type';
class LoginService {

    static fetchLoginApi(logindata) {
        const config = {
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
            }
        };
        const data = "grant_type=password&username=" + logindata["username"] + "&password=" + btoa(logindata["password"]) + logindata["username"];
        var url = Config.authPath + "oauth/token";
        return CustomHttpService.post(url, data, config, EncodeDecodeType.DEFAULT);
    }
}

export default LoginService;
