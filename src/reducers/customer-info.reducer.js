import { CustomerInfoActionType } from "../actiontype/customer-info.actiontype";
import CommonActionType from "../actiontype/common.actiontype";

const initialState = {
  isCustomerFound: false,
  customerLSINumber: "",
  accountNumber:"",
  lsiDetails: null,
  customerSRNumber: "",
  lsiNumberInput: "",
  accountNumberInput: "",
  srNumberInput: "",
  b2bCardLoading: false,
  accountDetails: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CustomerInfoActionType.SET_CUSTOMER_ACCOUNT_NUMBER:
      return {
        ...state,
        accountNumber: action.payload
      };
    case CustomerInfoActionType.CUSOMER_PLAN_INFO:
      return {
        ...state,
        customerPlanInfo: action.payload
      };
    case CustomerInfoActionType.SET_PROSPECT_NUMBER_FLAG:
      return {
        ...state,
        isProspectNumber: action.payload
      };
    case CustomerInfoActionType.SET_PROSPECT_CIRCLE:
      return {
        ...state,
        prospectCircle: action.payload
      };
    case CustomerInfoActionType.SET_CUSOMER_INFO:
      const isCustomerFound = action.payload && action.payload.length>0 ? true : false;
      return {
        ...state,
        lsiDetails: action.payload,
        isCustomerFound
      };
    case CustomerInfoActionType.RESET_CUSTOMER:
      const customerMobile = state.customerMobile;
      return {
        ...state,
        ...initialState,
        customerMobile
      };
    case CommonActionType.RESET_STATE:
      return {
        ...state,
        ...initialState
      };
    case CustomerInfoActionType.SET_CUSTOMER_SR_NUMBER:
      return {
        ...state,
        customerSRNumber: action.payload
      };
    case CustomerInfoActionType.SET_CUSTOMER_LSI_NUMBER:
      return {
        ...state, 
        customerLSINumber: action.payload
      };
    case CustomerInfoActionType.SET_CURRENT_LSI_DETAILS:
      return {
        ...state, 
        currentLSIDetails: action.payload,
      }
      case CustomerInfoActionType.RESET_CURRENT_LSI_DETAILS:
      return {
        ...state, 
        currentLSIDetails: {},
      }
      case CustomerInfoActionType.SET_CUSTOMER_ACCOUNT_DETAILS:
        return {
          ...state,
          accountDetails: action.payload
        }
      case CustomerInfoActionType.ENABLE_AUTO_FILL_LSI:
        return {
          ...state,
          autoFillLSI: true
        }
      case CustomerInfoActionType.DISABLE_AUTO_FILL_LSI:
        return {
          ...state,
          autoFillLSI: false
        }
      case CustomerInfoActionType.SET_CUSTOMER_LSI_NUMBER_FIELD_VALUE:
        return {
          ...state,
          lsiNumberInput: action.payload
        }
      case CustomerInfoActionType.SET_CUSTOMER_SR_NUMBER_FIELD_VALUE:
        return {
          ...state,
          srNumberInput: action.payload
        }
      case CustomerInfoActionType.SHOW_CARD_LOADER:
        return {
          ...state,
          b2bCardLoading: action.payload
        }
      case CustomerInfoActionType.HIDE_CARD_LOADER:
        return {
          ...state,
          b2bCardLoading: action.payload
        }
      case CustomerInfoActionType.SET_CUSTOMER_ACCOUNT_NUMBER_FIELD_VALUE:
        return {
          ...state,
          accountNumberInput: action.payload
        }
    default:
      return state;
  }
};
