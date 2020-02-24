import LocalConfig from './config.local';
import StagingConfig from './config.staging';
import ProdConfig from './config.prod';

class Config {

    static getConfig() {
        
        switch (process.env.REACT_APP_NODE_ENV) {
            case 'staging':
                return StagingConfig;
            case 'prod':
                return ProdConfig;
            case 'local':
                return LocalConfig;
            default:
                return LocalConfig;
        }
    }

    
}
Config.GLOBAL_CONFIG = Config.getConfig();


export default Config.GLOBAL_CONFIG;