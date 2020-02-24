import CustomHttpService from './custom-http.service';
import Config from '../config/config';

import EncodeDecodeType from '../actiontype/encode-decode-type';
class ProductListService {

    static fetchProductListApi(logindata) {
        const config = {
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
            }
        };
        var url = "https://swapi.co/api/planets/";
        return CustomHttpService.get(url, config, EncodeDecodeType.DEFAULT);
    }
}

export default ProductListService;
