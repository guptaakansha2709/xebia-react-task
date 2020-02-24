

export class LocalStorageService {

    static setRegistationInfo(myObj) {
        debugger;

        //is anything in localstorage?
        if (JSON.parse(_getItem('registationInfo')) === null) {
            a = [];
        } else {
            // Parse the serialized data back into an array of objects
            a = JSON.parse(localStorage.getItem('registationInfo'));
        }
        // Push the new data (whether it be an object or anything else) onto the array
        a.push(myObj)
        // Re-serialize the array back into a string and store it in localStorage
        _setItem('registationInfo', JSON.stringify(a));



    }
    static getRegistrationInfo() {

        const registationInfo = JSON.parse(localStorage._getItem("registationInfo") || "[]");
        if (registationInfo != null && registationInfo !== undefined && registationInfo) {
            return registationInfo;
        } else {
            return null;
        }
    }
}

const _setItem = (key, value) => {
    debugger;
    localStorage.setItem(key, value);
}

const _getItem = (key) => {
    return localStorage.getItem(key);
}

function _removeItem(key) {
    localStorage.removeItem(key);
}
const _getPromiseItem = (key, value) => {
    return new Promise((resolve, reject) => {

        try {

            const value = _getItem(key);
            resolve(value);
        } catch (e) {
            reject(null);
        }
    });

};
const _setPromiseItem = (key, value) => {
    return new Promise((resolve, reject) => {
        try {
            _setItem(key, value);
            resolve(true);
        } catch (e) {
            reject(false);
        }
    });
};



export default LocalStorageService;