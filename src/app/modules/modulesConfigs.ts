import './common/i18n';
import HomeModuleConfig from './home/HomeModuleConfig';
import AuthModuleConfig from './auth/AuthModuleConfig';
import UsersModuleConfig from 'app/modules/users/UsersModuleConfig';
import Headquarters from 'app/modules/headquarters/headquartersModuleConfig';
import MedicalSpecialtiesConfig from 'app/modules/medical-specialties/medical-specialtiesModuleConfig';


const modulesConfigs: any[] = [
    AuthModuleConfig,
    UsersModuleConfig,
    Headquarters,
    MedicalSpecialtiesConfig,
    //Home should Be last
    HomeModuleConfig
];

export default modulesConfigs;
