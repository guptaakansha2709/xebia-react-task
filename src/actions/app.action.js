import { AppActionType } from "../actiontype/app.actiontype";

export function showLoader() {
    return { type: AppActionType.SHOW_LOADER, payload: true };
}

export function hideLoader() {
    return { type: AppActionType.HIDE_LOADER, payload: false };
}

export function loadGoogleMapsAPI(payload) {
    return { type: AppActionType.LOAD_GOOGLE_MAP_SCRIPT, payload };
}
export function showCardLoader() {
    return { type: AppActionType.SHOW_CARD_LOADER, payload: true };
}

export function hideCardLoader() {
    return { type: AppActionType.HIDE_CARD_LOADER, payload: false };
}
