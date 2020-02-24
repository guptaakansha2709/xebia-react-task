import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import loginReducer from '../reducers/login.reducer';
import appReducer from "../reducers/app.reducer";
import snackbarReducer from "../reducers/snackbar.reducer";
import productListReducer from '../reducers/product-list.reducer';

import GLOBAL_CONFIG from '../config/config';



const middleware = [thunk];
const rootReducer = combineReducers({

    //this is for loginInfo Object - contain - (LoginApiResponse and LoginStatus)
    loginInfo: loginReducer,
    app: appReducer,
    snackbar: snackbarReducer,
    productListInfo: productListReducer,

    //handset details card

})

const createDevStore = () => {
    return createStore(
        rootReducer,
        compose(
            applyMiddleware(...middleware),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}

const createStagingStore = () => {
    return createProdStore();
}

const createProdStore = () => {
    return createStore(
        rootReducer,
        compose(
            applyMiddleware(...middleware)
            //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}

const store = GLOBAL_CONFIG.env === 'prod' ? createProdStore() : GLOBAL_CONFIG.env === 'staging' ? createStagingStore() : createDevStore();



export default store; 