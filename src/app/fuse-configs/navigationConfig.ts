import i18next from 'i18next';

import en from './i18n/en';
import es from './i18n/es';
import { App_Modules } from 'api/graphql/schema/types';


i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('es', 'navigation', es);

export type MenuID = App_Modules

export enum IGNORED_MENU {
    TRANSCODER_MENU = 'TRANSCODER_MENU',
}

export type MenuItem = {
    id: MenuID | IGNORED_MENU | string
    type: 'group' | 'item' | 'collapse' | 'divider'
    title?: string
    translate?: string
    icon?: string
    url?: string
    exact?: boolean
    children?: Array<MenuItem>
}


const navigationConfig: Array<MenuItem> = [

    {
        id: 'corporate_management',
        title: 'Corporate Management',
        translate: 'CORPORATE_MANAGEMENT',
        type: 'collapse',
        icon: 'apps',
        children: [

            {
                id: 'users',
                title: 'Users',
                translate: 'USERS',
                type: 'collapse',
                children: [
                    {
                        id: App_Modules.Users,
                        title: 'User List',
                        translate: 'USERS_LIST',
                        type: 'item',
                        url: '/user',
                        exact: true
                    },
                    {
                        id: App_Modules.UserRoles,
                        title: 'Roles',
                        translate: 'ROLES',
                        type: 'item',
                        url: '/user/roles',
                        exact: true
                    },
                    {
                        id: App_Modules.Users,
                        title: 'Membership',
                        translate: 'MEMBERSHIP',
                        type: 'item',
                        url: '/user/roles',
                        exact: true
                    }
                    /* {
                         id: App_Modules.UserPosition,
                         title: 'Positions',
                         translate: 'POSITIONS',
                         type: 'item',
                         url: '/user/positions',
                         exact: true
                     },
 
                     {
                         id: App_Modules.UserArea,
                         title: 'Areas',
                         translate: 'AREAS',
                         type: 'item',
                         url: '/user/areas',
                         exact: true
                     },*/

                ]

            }
        ]
    },
    {
        id: 'configuration',
        title: 'Configuration',
        translate: 'CONFIGURATION',
        type: 'collapse',
        icon: 'settings',
        children: [
            {
                id: App_Modules.Headquarters,
                title: 'Headquarters',
                translate: 'HEADQUARTERS',
                type: 'item',
                url: '/headquarters',
                exact: true
            },
            {
                id: App_Modules.Patient,
                title: 'Data Patient',
                translate: 'PATIENT',
                type: 'item',
                url: '/patient',
                exact: true
            }    
        ]
    },
    {
        id: 'medical_management',
        title: 'Medical Management',
        translate: 'MEDICAL_MANAGEMENT',
        type: 'collapse',
        icon: 'queue',
        children: [
            {
                id: App_Modules.MedicalSpecialties,
                title: 'Medical Specialties',
                translate: 'MEDICAL_SPECIALTIES',
                type: 'item',
                url: '/medical-specialties',
                exact: true
            },
            {
                id: App_Modules.MedicalSpecialties,
                title: 'Diagnosis Type',
                translate: 'DIAGNOSIS_TYPE',
                type: 'item',
                url: '/diagnosis-type',
                exact: true
            },
            {
                id: App_Modules.MedicalSpecialties,
                title: 'Diagnosis',
                translate: 'DIAGNOSIS',
                type: 'item',
                url: '/diagnosis',
                exact: true
            },      
            {
                id: App_Modules.Users,
                title: 'Procedures',
                translate: 'PROCEDURES',
                type: 'item',
                url: '/transcoder',
                exact: true
            },  
            {
                id: App_Modules.Users,
                title: 'Indications Patiens',
                translate: 'INDICATIONS_PATIENT',
                type: 'item',
                url: '/transcoder',
                exact: true
            }, 
            {
                id: App_Modules.Users,
                title: 'Habeas Data',
                translate: 'HABEAS_DATA',
                type: 'item',
                url: '/transcoder',
                exact: true
            }, 
            {
                id: App_Modules.Users,
                title: 'Informed Consent',
                translate: 'INFORMED_CONSENT',
                type: 'item',
                url: '/transcoder',
                exact: true
            }, 
            {
                id: App_Modules.Users,
                title: 'Patient safety check',
                translate: 'PATIENT_SAFETY_CHECK',
                type: 'item',
                url: '/transcoder',
                exact: true
            }, 
            {
                id: App_Modules.Users,
                title: 'Laboratory Exams',
                translate: 'LABORATORY_EXAMS',
                type: 'item',
                url: '/transcoder',
                exact: true
            }, 
            {
                id: App_Modules.Users,
                title: 'Medicines',
                translate: 'MEDICINES',
                type: 'item',
                url: '/transcoder',
                exact: true
            },
            {
                id: App_Modules.Users,
                title: 'Pathologies',
                translate: 'PATHOLOGIES',
                type: 'item',
                url: '/transcoder',
                exact: true
            }
        ]
    }
]


export default navigationConfig;
