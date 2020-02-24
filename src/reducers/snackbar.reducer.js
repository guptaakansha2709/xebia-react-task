import {
    AppActionType
} from "../actiontype/app.actiontype";

const initialState = {
    open: false,
    autoHideDuration: 4000,
    message: 'Event added to your calendar'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AppActionType.OPEN_SNACKBAR:
            return {
                ...state,
                open: action.payload.open,
                message: action.payload.message
            };
        case AppActionType.CLOSE_SNACKBAR:
            return {
                ...state,
                open: action.payload.open
            };
        default:
            return state;
    }
};
