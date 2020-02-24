import { ProductListActionType } from '../actiontype/product-list.actiontype';
import CommonAction from "../actiontype/common.actiontype";

const initialState = {
    productListApiResponse: [],
    productListApiStatus: '',
};

export default function productListReducer(state = initialState, action) {
    switch (action.type) {
        case ProductListActionType.PRODUCT_LIST_REQUEST:
            return {
                ...state,
                productListApiStatus: "loading",
                productListApiResponse: action.payload
            };
        case ProductListActionType.PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                productListApiStatus: "SUCCESS",
                productListApiResponse: action.payload
            };
        case ProductListActionType.PRODUCT_LIST_FAILURE:
            return {
                ...state,
                productListApiStatus: "FAILURE",
                productListApiResponse: action.payload
            };
        case CommonAction.RESET_STATE:

        default:
            return state
    }
}
