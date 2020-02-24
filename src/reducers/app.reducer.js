import { AppActionType } from "../actiontype/app.actiontype";
import CommonActionType from "../actiontype/common.actiontype";

const initialState = {
  displayLoader: false,
  isGoogleMapScriptLoaded: false,
  displayCardsLoader: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AppActionType.SHOW_LOADER:
      return {
        ...state,
        displayLoader: action.payload
      };
    case AppActionType.HIDE_LOADER:
      return {
        ...state,
        displayLoader: action.payload
      };
    case AppActionType.LOAD_GOOGLE_MAP_SCRIPT:
      return {
        ...state,
        isGoogleMapScriptLoaded: action.payload
      };
    case CommonActionType.RESET_STATE:
      return { ...state, ...initialState }
    case AppActionType.SHOW_CARD_LOADER:
      return {
        ...state,
        displayCardsLoader: action.payload
      };
    case AppActionType.HIDE_CARD_LOADER:
      return {
        ...state,
        displayCardsLoader: action.payload
      };
    default:
      return state;
  }
};
