import './common/i18n';
import HomeModuleConfig from './home/HomeModuleConfig';
import AuthModuleConfig from './auth/AuthModuleConfig';
import UsersModuleConfig from 'app/modules/users/UsersModuleConfig';
import Headquarters from 'app/modules/headquarters/headquartersModuleConfig';
import MedicalSpecialtiesConfig from 'app/modules/medical-specialties/medical-specialtiesModuleConfig';
import PatientModuleConfig from './patient/patientModuleConfig';

const modulesConfigs: any[] = [
    AuthModuleConfig,
    UsersModuleConfig,
    Headquarters,
    MedicalSpecialtiesConfig,
    PatientModuleConfig,
    //Home should Be last
    HomeModuleConfig
];

export default modulesConfigs;
