import { UtilizationActionType } from '../actiontype/utilization-tab.actiontype';
import CommonActionType from '../actiontype/common.actiontype';
import { CustomerInfoActionType } from '../actiontype/customer-info.actiontype';
import { AppConstant } from "../constants/app.constant";

const initialState = {
    UtilizationTabStatus: '',
    utilizationTabApiResponse: {},
    UtilizationTabSelectedTimeRange: AppConstant.UTILIZATION_TAB_TIME_RANGE_CURRENT,
    UtilizationTabLoader: false

};

export default function UtilizationTabReducer(state = initialState, action) {
    switch (action.type) {
        case UtilizationActionType.DATA_TRAFFIC_UTILIZATION_REQUEST:
            return {
                ...state,
                UtilizationTabStatus: "LOADING",
                utilizationTabApiResponse: action.payload
            };
        case UtilizationActionType.DATA_TRAFFIC_UTILIZATION_SUCCESS:
            return {
                ...state,
                UtilizationTabStatus: true,
                utilizationTabApiResponse: action.payload
            };
        case UtilizationActionType.UPDATE_DATA_TRAFFIC_UTILIZATION_TIME_RANGE:
            return {
                ...state,
                UtilizationTabSelectedTimeRange: action.timeRange
            };
        case UtilizationActionType.DATA_TRAFFIC_UTILIZATION_FAILURE:
            return {
                ...state,
                UtilizationTabStatus: false,
            };

        case UtilizationActionType.SHOW_LOADER:
            return {
                ...state,
                UtilizationTabLoader: true,
            };
        case UtilizationActionType.HIDE_LOADER:
            return {
                ...state,
                UtilizationTabLoader: false,
            };
        case CustomerInfoActionType.RESET_CUSTOMER:
        case CommonActionType.RESET_STATE:
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }

}
