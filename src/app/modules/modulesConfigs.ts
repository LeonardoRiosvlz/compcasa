import './common/i18n';
import HomeModuleConfig from './home/HomeModuleConfig';
import AuthModuleConfig from './auth/AuthModuleConfig';
import UsersModuleConfig from 'app/modules/users/UsersModuleConfig';
import Headquarters from 'app/modules/headquarters/headquartersModuleConfig';
import MedicalSpecialtiesConfig from 'app/modules/medical-specialties/medical-specialtiesModuleConfig';
import PatientModuleConfig from './patient/patientModuleConfig';
import QuickMedicalHistoryModuleConfig from './quick-medical-history/quick-medical-historyModuleConfig';
import  UserAreaModuleConfig  from 'app/modules/user-area/user-areaModuleConfig';
import  UserPositionModuleConfig  from 'app/modules/user-position/user-positionModuleConfig';

const modulesConfigs: any[] = [
    AuthModuleConfig,
    UsersModuleConfig,
    Headquarters,
    MedicalSpecialtiesConfig,
    PatientModuleConfig,
    QuickMedicalHistoryModuleConfig,
    UserPositionModuleConfig,
    UserAreaModuleConfig,
    //Home should Be last
    HomeModuleConfig
];

export default modulesConfigs;
