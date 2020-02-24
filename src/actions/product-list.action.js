
import { ProductListActionType } from "../actiontype/product-list.actiontype";
import ProductListService from '../services/product-list.service';
import { openSnackbarRequest } from './snackbar.action';
import { SnackbarMessages } from '../constants/snackbar-messages';
let snackbarMessage = {}



export const fetchTableListdata = () => (dispatch, getState) => {

    dispatch(fetchProductListApiLoading());
    // dispatch(showCardLoader());
    ProductListService.fetchProductListApi().then(
        response => {
            // dispatch(hideCardLoader());
            debugger;
            if (response && response.data && response.data.results) {
                dispatch(fetchProductListApiSuccess(response.data.results));
            }
            else {
                dispatch(openSnackbarRequest(null, "no data"));
            }
        },
        error => {
            // dispatch(hideCardLoader());
            dispatch(fetchProductListApiFailure(error));
        }
    );
}


function fetchProductListApiLoading() {
    return {
        type: ProductListActionType.PRODUCT_LIST_REQUEST
    }
}
export function fetchProductListApiSuccess(response) {
    return {
        type: ProductListActionType.PRODUCT_LIST_SUCCESS,
        payload: response
    }
}
export function fetchProductListApiFailure(error) {
    return {
        type: ProductListActionType.PRODUCT_LIST_FAILURE,
        payload: error
    }
}
