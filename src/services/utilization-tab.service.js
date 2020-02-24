import CustomHttpService from './custom-http.service';
import Config from '../config/config';
import CookieManagerService from './cookie.service';
import { AppConstant } from '../constants/app.constant';

import EncodeDecodeType from '../actiontype/encode-decode-type';

class UtilizationTabService {

    static fetchUtilizationDataApi(lsiNumber, timeRange) {
        const config = {
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
            }
        };
        const authDetails = CookieManagerService.getAuthDetails();
        const transactionId = CookieManagerService.getItem(AppConstant.TRANSACTION_ID) || "1234567890";
        const channel = authDetails.channel || "";
        
        const {fromTime, toTime} = UtilizationTabService.getTimeRange(timeRange)
        // const lsiNumber = CookieManagerService.getItem(AppConstant.LSI_NUMBER)

        var url = Config.contextPath + "user/rest/v1.0/b2b/dataTrafficDetails?lsiNumber=" + lsiNumber + "&fromTime=" + fromTime + "&toTime=" + toTime + "&transactionId=" + transactionId;
        return CustomHttpService.get(url, config, EncodeDecodeType.DEFAULT);
    }

    static getTimeRange (timeRange) {

        let currDate = new Date()
        let toTime = ''
        let fromTime = ''
        if(!timeRange || timeRange === AppConstant.UTILIZATION_TAB_TIME_RANGE_CURRENT ) {
            
            let monthsValue = currDate.getMonth() + 1
            if(monthsValue < 10) {
                monthsValue = `0${monthsValue}`
            }

            let dateValue = currDate.getDate()
            if(dateValue < 10) {
                dateValue = `0${dateValue}`
            }

            let hoursValue = currDate.getHours()
            if(hoursValue < 10) {
                hoursValue = `0${hoursValue}`
            }

            let minutesValue = currDate.getMinutes()
            if(minutesValue >= 0 && minutesValue <= 15)
                minutesValue = '00'
            else if(minutesValue > 15 && minutesValue < 30)
                minutesValue = '15'
            else if(minutesValue >= 30)
                minutesValue = '30'

            toTime = `${currDate.getFullYear()}-${monthsValue}-${dateValue} ${hoursValue}:${minutesValue}:00`
            fromTime = `${currDate.getFullYear()}-${monthsValue}-${dateValue} 00:00:00`

        } else if (timeRange === AppConstant.UTILIZATION_TAB_TIME_RANGE_7_DAYS) {
            currDate.setDate(currDate.getDate() - 1)
            let monthsValue = currDate.getMonth() + 1
            if(monthsValue < 10) {
                monthsValue = `0${monthsValue}`
            }
            let dateValue = currDate.getDate()
            if(dateValue < 10) {
                dateValue = `0${dateValue}`
            }
            toTime = `${currDate.getFullYear()}-${monthsValue}-${dateValue} 23:59:00`
            currDate.setDate(currDate.getDate() - 8)
            monthsValue = currDate.getMonth() + 1
            if(monthsValue < 10) {
                monthsValue = `0${monthsValue}`
            }
            dateValue = currDate.getDate()
            if(dateValue < 10) {
                dateValue = `0${dateValue}`
            }
            fromTime = `${currDate.getFullYear()}-${monthsValue}-${dateValue} 00:00:00`
            
        } else {
            currDate.setDate(currDate.getDate() - 1)
            let monthsValue = currDate.getMonth() + 1
            if(monthsValue < 10) {
                monthsValue = `0${monthsValue}`
            }
            let dateValue = currDate.getDate()
            if(dateValue < 10) {
                dateValue = `0${dateValue}`
            }
            toTime = `${currDate.getFullYear()}-${monthsValue}-${dateValue} 23:59:00`
            currDate.setDate(currDate.getDate() - 31)
            monthsValue = currDate.getMonth() + 1
            if(monthsValue < 10) {
                monthsValue = `0${monthsValue}`
            }
            dateValue = currDate.getDate()
            if(dateValue < 10) {
                dateValue = `0${dateValue}`
            }
            fromTime = `${currDate.getFullYear()}-${monthsValue}-${dateValue} 00:00:00`
        }

        return {fromTime, toTime}
    }
}

export default UtilizationTabService;
