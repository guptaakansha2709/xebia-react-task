import CustomHttpService from './custom-http.service';
import Config from '../config/config';
import EncodeDecodeType from '../actiontype/encode-decode-type';
import CookieManagerService from './cookie.service';

class CustomerInfoService {

    static fetchCustomerLSIDetailsFromAccountNumber(reqData) {
        const accountNumber = reqData["accountNumber"] || null;
        if (accountNumber) {
            const url = Config.contextPath + "user/rest/v1.0/lsiDetails/fetchLSIDetails?accountId=" + accountNumber;
            return CustomHttpService.get(url, {}, EncodeDecodeType.DEFAULT);
        }
    }

    static fetchCustomerAccountDetailsFromOptimus(reqData) {
        const lsiNumber = reqData["lsiNumber"] || null;
        if (lsiNumber) {
            const url = Config.contextPath + "user/rest/v1.0/b2b/fetchOptimusProfile?lsiNumber=" + lsiNumber;
            return CustomHttpService.get(url, {}, EncodeDecodeType.DEFAULT);
        }
    }

    static fetchDetailsFromSRNumber(reqData) {
        const srNumber = reqData["srNumber"] || null;
        if (srNumber) {
            const url = Config.contextPath + "user/rest/v1.0/srHistory/fetchSRDetails/v2.0?srNumber=" + srNumber;
            return CustomHttpService.get(url, {}, EncodeDecodeType.DEFAULT);
        }
    }

}

export default CustomerInfoService;
