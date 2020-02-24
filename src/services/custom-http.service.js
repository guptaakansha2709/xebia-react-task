import axios from 'axios';
import EncodeDecodeType from '../actiontype/encode-decode-type';
import CookieManagerService from './cookie.service';
import { AppConstant } from '../constants/app.constant';
import store from "../store/redux-store";
// import { unauthorizeUser } from '../actions/authorization.actions'
import { resetState } from '../actions/common.action'
// import GLOBAL_CONFIG from '../config/config';

export default class CustomHttpService {
    static post(url, data, config, encodeDecodeType, retry_count) {

        switch (encodeDecodeType) {
            case EncodeDecodeType.DEFAULT:
                _addDefaultConfig(config);
                return _defaultPost(url, data, config);
            default:
                return;
        }
    }

    static get(url, config, encodeDecodeType, retry_count) {
        switch (encodeDecodeType) {
            case EncodeDecodeType.DEFAULT:
                _addDefaultConfig(config);
                return _defaultGet(url, config);
            case EncodeDecodeType.MAP_MY_INDIA:
                return _defaultGet(url, config);
            default:
                return;
        }
    }

    static put(url, data, config, encodeDecodeType, retry_count) {

        switch (encodeDecodeType) {
            case EncodeDecodeType.DEFAULT:
                _addDefaultConfig(config);
                return _defaultPut(url, data, config);
        }
    }
    static delete(url, config, encodeDecodeType) {
        switch (encodeDecodeType) {
            case EncodeDecodeType.DEFAULT:
                _addDefaultConfig(config);
                return _defaultDelete(url, config);
            default: { }
        }
    }


}

const _addDefaultConfig = (config) => {
    if (!config) {
        config = {};
    }
    if (!config["timeout"]) {
        config["timeout"] = 30000;
    }
    if (!config["headers"]) {
        config["headers"] = {};
    }
    if (!config["headers"]["Content-Type"]) {
        config["headers"]["Content-Type"] = "application/json";
    }
    if (!config["headers"]["Authorization"]) {
        _setAuthToken(config["headers"])
    }
    if (!config["headers"]["x-correlation-id"]) {
        _setCorrelationId(config["headers"])
    }
}

// const _defaultGet = (url, config) => {
//     return axios.get(url, config);
// }
const _defaultGet = (url, config) => {
    return new Promise((resolve, reject) => {
        axios.get(url, config).then(

            response => {
                resolve(response)
            },
            error => {
                if (error && error.response && error.response.status && error.response.status === 401) {
                    // store.dispatch(unauthorizeUser())
                    store.dispatch(resetState())
                    reject(error);
                }
                else {
                    reject(error)
                }
            }
        )
    })
}

const _defaultPost = (url, data, config) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data, config).then(

            response => {
                resolve(response)
            },
            error => {
                if (error && error.response && error.response.status && error.response.status === 401) {
                    // store.dispatch(unauthorizeUser())
                    store.dispatch(resetState())
                    reject(error);
                }
                else {
                    reject(error)
                }
            }
        )
    })
}

const _defaultPut = (url, data, config) => {
    return new Promise((resolve, reject) => {
        axios.put(url, data, config).then(

            response => {
                resolve(response)
            },
            error => {
                if (error && error.response && error.response.status && error.response.status === 401) {
                    // store.dispatch(unauthorizeUser());
                    store.dispatch(resetState());
                    reject(error);
                }
                else {
                    reject(error)
                }
            }
        )
    })
}
const _defaultDelete = (url, config) => {
    return new Promise((resolve, reject) => {
        axios.delete(url, config).then(

            response => {
                resolve(response)
            },
            error => {
                if (error && error.response && error.response.status && error.response.status === 401) {
                    // store.dispatch(unauthorizeUser());
                    store.dispatch(resetState());
                    reject(error);
                }
                else {
                    reject(error)
                }
            }
        )
    })
}

const _setAuthToken = (headers) => {
    let authDetails = CookieManagerService.getItem(AppConstant.AUTH_DETAILS);
    if (authDetails) {
        authDetails = JSON.parse(authDetails);
        headers["Authorization"] = authDetails["token"];
    }
}

const _setCorrelationId = (headers) => {
    let correlationId = CookieManagerService.getItem(AppConstant.CORRELATION_ID);
    if (correlationId) {
        headers["x-correlation-id"] = correlationId;
    }
}