
import { SnackbarMessages } from "../constants/snackbar-messages";

class FormValidatorService {
    static validateDFF(dffInfo, formData) {
        let errMessage = "";
        for (let i = 0; i < dffInfo.length; i++) {
            if (dffInfo[i].mandatoryFlag === 'Y' && !formData[dffInfo[i]['name']].value) {
                errMessage = dffInfo[i]['name'] + " cannot be blank.";
                break;
            }
        }
        return errMessage;
    }

    static validateTaskUpdateFields(taskfieldsInfo, formData) {
        let errMessage = "";
        for (let i = 0; i < taskfieldsInfo.length; i++) {
            if (!formData[taskfieldsInfo[i]['columnName']].value) {
                errMessage = taskfieldsInfo[i]['columnName'] + " cannot be blank.";
                break;
            }
        }
        return errMessage;
    }

    static validateArc(arcInfo) {
        let errMessage = "";
        if (arcInfo && (!arcInfo.selectedArcIssueChannel || !arcInfo.selectedArcIssueCircle || !arcInfo.selectedArcIssueCity || !arcInfo.selectedArcIssueLocation || !arcInfo.selectedArcIssueStoreNameAddr || !arcInfo.selectedArcIssueSubType || !arcInfo.selectedArcIssueStoreType || !arcInfo.selectedArcIssueVoc || !arcInfo.selectedArcNotes)) {
            errMessage = SnackbarMessages.ARC_VALIDATION_ERROR_MSG
        }
        return errMessage;
    }
    static validateClaimDFF(dffInfo, formData) {
        let errMessage = "";
        for (let i = 0; i < dffInfo.length; i++) {
            if (dffInfo[i].name && !formData[dffInfo[i]['name']]) {
                errMessage = dffInfo[i]['dispalyName'] + " cannot be blank.";
                break;
            } else if (dffInfo[i].type === 'date') {
                if (formData[dffInfo[i]['name']].length !== 19) {
                    errMessage = "Please enter valid Date and Time.";
                    break;
                } else {
                    var str = formData[dffInfo[i]['name']].split(' ')[0];
                    var patt = new RegExp("(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[012])-((19|20)\\d\\d)");
                    var res = patt.test(str);
                    if (!res) {
                        errMessage = "Please enter valid Date and Time.";
                        break;
                    }
                    var dateArr = str.split('-');
                    var cDate = new Date();
                    var fDate = new Date();
                    fDate.setDate(parseInt(dateArr[0]));
                    fDate.setMonth(parseInt(dateArr[1]) - 1);
                    fDate.setFullYear(parseInt(dateArr[2]));
                    fDate.setHours(0);
                    fDate.setMinutes(0);
                    fDate.setSeconds(0);
                    if (cDate.getTime() < fDate.getTime()) {
                        errMessage = "Future Date is not allowed.";
                        break;
                    }
                }
            }
        }
        return errMessage;
    }
}

export default FormValidatorService;
