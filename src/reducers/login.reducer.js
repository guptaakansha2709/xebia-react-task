import { LoginActionType } from '../actiontype/login.actiontype';
import CommonAction from "../actiontype/common.actiontype";

const initialState = {
  loginStatus: '',
  loginApiResponse: {}
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LoginActionType.LOGIN_REQUEST:
      return {
        ...state,
        loginStatus: "loading",
        loginApiResponse: action.payload
      };
    case LoginActionType.LOGIN_SUCCESS:
      return {
        ...state,
        loginStatus: "loginSuccess",
        loginApiResponse: action.payload
      };
    case LoginActionType.LOGIN_FAILURE:
      return {
        ...state,
        loginStatus: "loginFailure",
        loginApiResponse: action.payload
      };
    case CommonAction.RESET_STATE:

    case LoginActionType.LOGOUT:
      return {};
    default:
      return state
  }
}
