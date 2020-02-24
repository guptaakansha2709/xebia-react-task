import CommonActionType from '../actiontype/common.actiontype'

export const resetState = () => {
    return { type: CommonActionType.RESET_STATE }
}
