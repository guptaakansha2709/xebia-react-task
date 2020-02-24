import { AppConstant } from '../constants/app.constant';

export default class CookieManagerService {

    static setItem(key, value) {
        let date = new Date();
        let minutes = 24 * 60;
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        let expires = "; expires=" + date.toUTCString();
        document.cookie = key + "=" + btoa(encodeURIComponent(value)) + expires;
    }

    static getItem(key) {
        const name = key + "=";
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return decodeURIComponent(atob(c.substring(name.length, c.length)));
            }
        }
        return "";
    }

    static clearCookie() {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=";
        }
    }

    static removeItem(key) {
        document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    static getAuthDetails() {
        let authDetails = this.getItem(AppConstant.AUTH_DETAILS);
        if(authDetails) {
            authDetails = JSON.parse(authDetails);
            return authDetails;
        }
        return {};
    }
}