import './common/i18n';
import HomeModuleConfig from './home/HomeModuleConfig';
import AuthModuleConfig from './auth/AuthModuleConfig';
import UsersModuleConfig from 'app/modules/users/UsersModuleConfig';
import Headquarters from 'app/modules/headquarters/headquartersModuleConfig';
import MedicalSpecialtiesConfig from 'app/modules/medical-specialties/medical-specialtiesModuleConfig';
import PatientModuleConfig from './patient/patientModuleConfig';
import QuickMedicalHistoryModuleConfig from './quick-medical-history/quick-medical-historyModuleConfig';

const modulesConfigs: any[] = [
    AuthModuleConfig,
    UsersModuleConfig,
    Headquarters,
    MedicalSpecialtiesConfig,
    PatientModuleConfig,
    QuickMedicalHistoryModuleConfig,
    //Home should Be last
    HomeModuleConfig
];

export default modulesConfigs;
