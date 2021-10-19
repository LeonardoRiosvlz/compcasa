export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** Represents NULL values */
  Void: any;
};

export enum Action_List {
  Create = 'CREATE',
  Update = 'UPDATE',
  DeleteOne = 'DELETE_ONE',
  DeleteMany = 'DELETE_MANY',
  GetAll = 'GET_ALL',
  GetPaginated = 'GET_PAGINATED',
  GetOne = 'GET_ONE',
  UsersGetUserProfile = 'USERS_GET_USER_PROFILE',
  FilesGetWriteSignedUrl = 'FILES_GET_WRITE_SIGNED_URL',
  FilesCreateUploadedFile = 'FILES_CREATE_UPLOADED_FILE',
  TenantGetConnection = 'TENANT_GET_CONNECTION',
  TranscoderTranscoder = 'TRANSCODER_TRANSCODER'
}

export enum App_Modules {
  Users = 'USERS',
  Headquarters = 'HEADQUARTERS',
  UserArea = 'USER_AREA',
  UserPosition = 'USER_POSITION',
  UserRoles = 'USER_ROLES',
  Tenant = 'TENANT',
  Files = 'FILES',
  Notifications = 'NOTIFICATIONS',
  Setting = 'SETTING',
  Membership = 'MEMBERSHIP',
  DataParameterization = 'DATA_PARAMETERIZATION',
  PatientDataSettings = 'PATIENT_DATA_SETTINGS',
  MedicalSpecialties = 'MEDICAL_SPECIALTIES',
  DiagnosisType = 'DIAGNOSIS_TYPE',
  Diagnosis = 'DIAGNOSIS',
  IndicationsPatient = 'INDICATIONS_PATIENT',
  Procedures = 'PROCEDURES',
  HabeasData = 'HABEAS_DATA',
  InformedConsent = 'INFORMED_CONSENT',
  PatientSafetyCheck = 'PATIENT_SAFETY_CHECK',
  LaboratoryExams = 'LABORATORY_EXAMS',
  Medicines = 'MEDICINES',
  Pathologies = 'PATHOLOGIES'
}

export type AuthProviderDataResponse = {
  thirdPartyId: Scalars['String'];
  provider: Scalars['String'];
};

export type AuthRoleResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  permits: Array<PermitsResponse>;
};

export type AuthUserResponse = {
  userId: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  roles: Array<AuthRoleResponse>;
  username?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  isAdmin: Scalars['Boolean'];
  avatarFile?: Maybe<CloudFileResponse>;
};

export type AvailablePermitsResponse = {
  module: App_Modules;
  actions: Array<Action_List>;
};

export type BooleanFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
};

export type ChangePasswordInput = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['ID'];
};

export type CloudFileIdResponse = {
  key: Scalars['String'];
  url: Scalars['String'];
};

export type CloudFileResponse = {
  id: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CreateDataParameterizationInput = {
  paymentDeadlines: Scalars['Float'];
  deadlineForPaymentReminder: Scalars['Float'];
  deadlineForAppointmentReminder: Scalars['Float'];
};

export type CreateDiagnosisInput = {
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateDiagnosisTypeInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateFilesInput = {
  url: Scalars['String'];
  key: Scalars['String'];
  filename: Scalars['String'];
  bytes?: Maybe<Scalars['Float']>;
  storage: FileStorageType;
  status: FileStatus;
};

export type CreateHabeasDataInput = {
  description: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateHeadquartersInput = {
  name: Scalars['String'];
  code: Scalars['String'];
  city: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  address: Scalars['String'];
  manager: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateIndicationsPatientInput = {
  description: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateInformedConsentInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateLaboratoryExamsInput = {
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateMedicalSpecialtiesInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateMedicinesInput = {
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateMembershipInput = {
  cost?: Maybe<Scalars['Float']>;
  validity?: Maybe<TaxType>;
  daysAfterExpired?: Maybe<Scalars['Int']>;
  voiceTranscription?: Maybe<Scalars['Boolean']>;
  limitedNumberPatients?: Maybe<Scalars['Boolean']>;
  limitPatients?: Maybe<Scalars['Int']>;
  useLogo?: Maybe<Scalars['Boolean']>;
  limitedNumberHeadquarters?: Maybe<Scalars['Boolean']>;
  limitHeadquarters?: Maybe<Scalars['Int']>;
  administrativeUserQuantity?: Maybe<Scalars['Int']>;
  medicalUserQuantity?: Maybe<Scalars['Int']>;
  sendingEmailMedicalPrescription?: Maybe<Scalars['Boolean']>;
  sendingWhatsappMedicalPrescription?: Maybe<Scalars['Boolean']>;
  generateConsentDigitally?: Maybe<Scalars['Boolean']>;
  schedulingAppointmentsWeb?: Maybe<Scalars['Boolean']>;
  appointmentWotificationWhatsApp?: Maybe<Scalars['Boolean']>;
  appointmentWotificationMail?: Maybe<Scalars['Boolean']>;
  appointmentWotificationSms?: Maybe<Scalars['Boolean']>;
  appointmentReminderWhatsApp?: Maybe<Scalars['Boolean']>;
  appointmentReminderMail?: Maybe<Scalars['Boolean']>;
  appointmentReminderSms?: Maybe<Scalars['Boolean']>;
  NumberSmsAllowed?: Maybe<Scalars['Int']>;
  sendingMessagesSpecialDates?: Maybe<Scalars['Boolean']>;
  sendingMailSpecialDates?: Maybe<Scalars['Boolean']>;
  sendingWhatsAppSpecialDates?: Maybe<Scalars['Boolean']>;
  allowPromotionalEmailing?: Maybe<Scalars['Boolean']>;
  AllowQuotesClients?: Maybe<Scalars['Boolean']>;
  inventoryAndBilling?: Maybe<Scalars['Boolean']>;
  hoursAllowedVideoConsultation?: Maybe<Scalars['Int']>;
  integrationWithPaymentGateway?: Maybe<Scalars['Boolean']>;
  additionalCostHeadquarters?: Maybe<Scalars['Float']>;
  additionalCostPerAdministrativeUser?: Maybe<Scalars['Float']>;
  additionalCostPerMedicalUser?: Maybe<Scalars['Float']>;
  additionalCostHoursVideoConsultation?: Maybe<Scalars['Float']>;
  additionalCostSmsPackage?: Maybe<Scalars['Float']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreatePathologiesInput = {
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreatePatientDataSettingsInput = {
  firstName?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['Boolean']>;
  firstSurname?: Maybe<Scalars['Boolean']>;
  lastSurname?: Maybe<Scalars['Boolean']>;
  dateOfBirth?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['Boolean']>;
  maritalStatus?: Maybe<Scalars['Boolean']>;
  bloodType?: Maybe<Scalars['Boolean']>;
  vitalStatus?: Maybe<Scalars['Boolean']>;
  contactInformation?: Maybe<Scalars['Boolean']>;
  landlinePhoneNumber?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['Boolean']>;
  patientHeadquarters?: Maybe<Scalars['Boolean']>;
  mainAddress?: Maybe<Scalars['Boolean']>;
  secondaryHeadquarters?: Maybe<Scalars['Boolean']>;
  countryDepartmentCity?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['Boolean']>;
  socialSecurity?: Maybe<Scalars['Boolean']>;
  affiliateType?: Maybe<Scalars['Boolean']>;
  affiliateTypeSsg?: Maybe<Scalars['Boolean']>;
  educationLevel?: Maybe<Scalars['Boolean']>;
  ethnicGroup?: Maybe<Scalars['Boolean']>;
  populationGroup?: Maybe<Scalars['Boolean']>;
  occupation?: Maybe<Scalars['Boolean']>;
  eps?: Maybe<Scalars['Boolean']>;
  affiliateDate?: Maybe<Scalars['Boolean']>;
  prepaid?: Maybe<Scalars['Boolean']>;
  benefitPlan?: Maybe<Scalars['Boolean']>;
  healthCareProgram?: Maybe<Scalars['Boolean']>;
  generalNotesAttention?: Maybe<Scalars['Boolean']>;
  contractNumber?: Maybe<Scalars['Boolean']>;
  occupationalRiskManagement?: Maybe<Scalars['Boolean']>;
  pensionFundManagement?: Maybe<Scalars['Boolean']>;
  companion?: Maybe<Scalars['Boolean']>;
  companionName?: Maybe<Scalars['Boolean']>;
  kinshipCompanion?: Maybe<Scalars['Boolean']>;
  companionPhone?: Maybe<Scalars['Boolean']>;
};

export type CreatePatientSafetyCheckInput = {
  description: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateProceduresInput = {
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateRoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  permits: Array<PermitsInput>;
};

export type CreateSettingInput = {
  email?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Scalars['ID']>;
};

export type CreateTenantInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
  info?: Maybe<TenantInfoInput>;
};

export type CreateUploadedFileInput = {
  key: Scalars['String'];
  storage?: Maybe<FileStorageType>;
  toRemove?: Maybe<Scalars['String']>;
  isVideo?: Maybe<Scalars['Boolean']>;
};

export type CreateUserAreaInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  roles: Array<Scalars['ID']>;
  profile?: Maybe<ProfileInput>;
  isActive?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  avatarFile?: Maybe<Scalars['ID']>;
};

export type CreateUserPositionInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type DataParameterizationFilterFilter = {
  and?: Maybe<Array<DataParameterizationFilterFilter>>;
  or?: Maybe<Array<DataParameterizationFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  paymentDeadlines?: Maybe<StringFieldComparison>;
  deadlineForPaymentReminder?: Maybe<StringFieldComparison>;
  deadlineForAppointmentReminder?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type DataParameterizationResponse = {
  id: Scalars['ID'];
  paymentDeadlines: Scalars['Float'];
  deadlineForPaymentReminder: Scalars['Float'];
  deadlineForAppointmentReminder: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DateFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['DateTime']>;
  neq?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  between?: Maybe<DateFieldComparisonBetween>;
  notBetween?: Maybe<DateFieldComparisonBetween>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};


export type DeleteDataParameterizationInput = {
  entityId: Scalars['ID'];
};

export type DeleteDiagnosisInput = {
  entityId: Scalars['ID'];
};

export type DeleteDiagnosisTypeInput = {
  entityId: Scalars['ID'];
};

export type DeleteFilesInput = {
  entityId: Scalars['ID'];
};

export type DeleteHabeasDataInput = {
  entityId: Scalars['ID'];
};

export type DeleteHeadquartersInput = {
  entityId: Scalars['ID'];
};

export type DeleteIndicationsPatientInput = {
  entityId: Scalars['ID'];
};

export type DeleteInformedConsentInput = {
  entityId: Scalars['ID'];
};

export type DeleteLaboratoryExamsInput = {
  entityId: Scalars['ID'];
};

export type DeleteManyDataParameterizationInput = {
  where?: Maybe<DataParameterizationFilterFilter>;
};

export type DeleteManyDiagnosisInput = {
  where?: Maybe<DiagnosisFilterFilter>;
};

export type DeleteManyDiagnosisTypeInput = {
  where?: Maybe<DiagnosisTypeFilterFilter>;
};

export type DeleteManyFilesInput = {
  where?: Maybe<FilesFilterFilter>;
};

export type DeleteManyHabeasDataInput = {
  where?: Maybe<HabeasDataFilterFilter>;
};

export type DeleteManyHeadquartersInput = {
  where?: Maybe<HeadquartersFilterFilter>;
};

export type DeleteManyIndicationsPatientInput = {
  where?: Maybe<IndicationsPatientFilterFilter>;
};

export type DeleteManyInformedConsentInput = {
  where?: Maybe<InformedConsentFilterFilter>;
};

export type DeleteManyLaboratoryExamsInput = {
  where?: Maybe<LaboratoryExamsFilterFilter>;
};

export type DeleteManyMedicalSpecialtiesInput = {
  where?: Maybe<MedicalSpecialtiesFilterFilter>;
};

export type DeleteManyMedicinesInput = {
  where?: Maybe<MedicinesFilterFilter>;
};

export type DeleteManyMembershipInput = {
  where?: Maybe<MembershipFilterFilter>;
};

export type DeleteManyNotificationInput = {
  where?: Maybe<NotificationFilterFilter>;
};

export type DeleteManyPathologiesInput = {
  where?: Maybe<PathologiesFilterFilter>;
};

export type DeleteManyPatientDataSettingsInput = {
  where?: Maybe<PatientDataSettingsFilterFilter>;
};

export type DeleteManyPatientSafetyCheckInput = {
  where?: Maybe<PatientSafetyCheckFilterFilter>;
};

export type DeleteManyProceduresInput = {
  where?: Maybe<ProceduresFilterFilter>;
};

export type DeleteManyRoleInput = {
  where?: Maybe<RoleFilterFilter>;
};

export type DeleteManySettingInput = {
  where?: Maybe<SettingFilterFilter>;
};

export type DeleteManyUserAreaInput = {
  where?: Maybe<UserAreaFilterFilter>;
};

export type DeleteManyUserInput = {
  where?: Maybe<UserFilterFilter>;
};

export type DeleteManyUserPositionInput = {
  where?: Maybe<UserPositionFilterFilter>;
};

export type DeleteMedicalSpecialtiesInput = {
  entityId: Scalars['ID'];
};

export type DeleteMedicinesInput = {
  entityId: Scalars['ID'];
};

export type DeleteMembershipInput = {
  entityId: Scalars['ID'];
};

export type DeleteNotificationInput = {
  entityId: Scalars['ID'];
};

export type DeletePathologiesInput = {
  entityId: Scalars['ID'];
};

export type DeletePatientDataSettingsInput = {
  entityId: Scalars['ID'];
};

export type DeletePatientSafetyCheckInput = {
  entityId: Scalars['ID'];
};

export type DeleteProceduresInput = {
  entityId: Scalars['ID'];
};

export type DeleteRoleInput = {
  entityId: Scalars['ID'];
};

export type DeleteSettingInput = {
  entityId: Scalars['ID'];
};

export type DeleteTenantInput = {
  entityId: Scalars['ID'];
};

export type DeleteUserAreaInput = {
  entityId: Scalars['ID'];
};

export type DeleteUserInput = {
  entityId: Scalars['ID'];
};

export type DeleteUserPositionInput = {
  entityId: Scalars['ID'];
};

export type DiagnosisFilterFilter = {
  and?: Maybe<Array<DiagnosisFilterFilter>>;
  or?: Maybe<Array<DiagnosisFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type DiagnosisResponse = {
  id: Scalars['ID'];
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DiagnosisTypeFilterFilter = {
  and?: Maybe<Array<DiagnosisTypeFilterFilter>>;
  or?: Maybe<Array<DiagnosisTypeFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type DiagnosisTypeResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EntityFieldsResponse = {
  field: Scalars['String'];
  value: Scalars['String'];
};

export enum FileStatus {
  Unused = 'UNUSED',
  Processing = 'PROCESSING',
  Ok = 'OK'
}

export enum FileStorageType {
  Aws = 'AWS',
  Local = 'LOCAL',
  Cloudinary = 'CLOUDINARY',
  Other = 'OTHER'
}

export type FilesFilterFilter = {
  and?: Maybe<Array<FilesFilterFilter>>;
  or?: Maybe<Array<FilesFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  url?: Maybe<StringFieldComparison>;
  key?: Maybe<StringFieldComparison>;
  filename?: Maybe<StringFieldComparison>;
  bytes?: Maybe<StringFieldComparison>;
  storage?: Maybe<StringFieldComparison>;
  status?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FilesResponse = {
  id: Scalars['ID'];
  url: Scalars['String'];
  key: Scalars['String'];
  filename: Scalars['String'];
  bytes?: Maybe<Scalars['Float']>;
  storage: FileStorageType;
  status: FileStatus;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
  redirectTo: Scalars['String'];
};

export type GenderFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<UserGender>;
  neq?: Maybe<UserGender>;
  gt?: Maybe<UserGender>;
  gte?: Maybe<UserGender>;
  lt?: Maybe<UserGender>;
  lte?: Maybe<UserGender>;
  like?: Maybe<UserGender>;
  notLike?: Maybe<UserGender>;
  iLike?: Maybe<UserGender>;
  notILike?: Maybe<UserGender>;
  in?: Maybe<Array<UserGender>>;
  notIn?: Maybe<Array<UserGender>>;
};

export type GetAllDataParameterizationInput = {
  where?: Maybe<DataParameterizationFilterFilter>;
  orderBy?: Maybe<OrderByDataParameterizationInput>;
};

export type GetAllDiagnosisInput = {
  where?: Maybe<DiagnosisFilterFilter>;
  orderBy?: Maybe<OrderByDiagnosisInput>;
};

export type GetAllDiagnosisTypeInput = {
  where?: Maybe<DiagnosisTypeFilterFilter>;
  orderBy?: Maybe<OrderByDiagnosisTypeInput>;
};

export type GetAllHabeasDataInput = {
  where?: Maybe<HabeasDataFilterFilter>;
  orderBy?: Maybe<OrderByHabeasDataInput>;
};

export type GetAllHeadquartersInput = {
  where?: Maybe<HeadquartersFilterFilter>;
  orderBy?: Maybe<OrderByHeadquartersInput>;
};

export type GetAllIndicationsPatientInput = {
  where?: Maybe<IndicationsPatientFilterFilter>;
  orderBy?: Maybe<OrderByIndicationsPatientInput>;
};

export type GetAllInformedConsentInput = {
  where?: Maybe<InformedConsentFilterFilter>;
  orderBy?: Maybe<OrderByInformedConsentInput>;
};

export type GetAllLaboratoryExamsInput = {
  where?: Maybe<LaboratoryExamsFilterFilter>;
  orderBy?: Maybe<OrderByLaboratoryExamsInput>;
};

export type GetAllMedicalSpecialtiesInput = {
  where?: Maybe<MedicalSpecialtiesFilterFilter>;
  orderBy?: Maybe<OrderByMedicalSpecialtiesInput>;
};

export type GetAllMedicinesInput = {
  where?: Maybe<MedicinesFilterFilter>;
  orderBy?: Maybe<OrderByMedicinesInput>;
};

export type GetAllMembershipInput = {
  where?: Maybe<MembershipFilterFilter>;
  orderBy?: Maybe<OrderByMembershipInput>;
};

export type GetAllNotificationInput = {
  where?: Maybe<NotificationFilterFilter>;
  orderBy?: Maybe<OrderByNotificationInput>;
};

export type GetAllPathologiesInput = {
  where?: Maybe<PathologiesFilterFilter>;
  orderBy?: Maybe<OrderByPathologiesInput>;
};

export type GetAllPatientDataSettingsInput = {
  where?: Maybe<PatientDataSettingsFilterFilter>;
  orderBy?: Maybe<OrderByPatientDataSettingsInput>;
};

export type GetAllPatientSafetyCheckInput = {
  where?: Maybe<PatientSafetyCheckFilterFilter>;
  orderBy?: Maybe<OrderByPatientSafetyCheckInput>;
};

export type GetAllProceduresInput = {
  where?: Maybe<ProceduresFilterFilter>;
  orderBy?: Maybe<OrderByProceduresInput>;
};

export type GetAllRoleInput = {
  where?: Maybe<RoleFilterFilter>;
  orderBy?: Maybe<OrderByRoleInput>;
};

export type GetAllSettingInput = {
  where?: Maybe<SettingFilterFilter>;
  orderBy?: Maybe<OrderBySettingInput>;
};

export type GetAllTenantsInput = {
  where?: Maybe<TenantFilterFilter>;
  orderBy?: Maybe<OrderByTenantInput>;
};

export type GetAllUserAreaInput = {
  where?: Maybe<UserAreaFilterFilter>;
  orderBy?: Maybe<OrderByUserAreaInput>;
};

export type GetAllUserPositionInput = {
  where?: Maybe<UserPositionFilterFilter>;
  orderBy?: Maybe<OrderByUserPositionInput>;
};

export type GetAllUsersInput = {
  where?: Maybe<UserFilterFilter>;
  orderBy?: Maybe<OrderByUserInput>;
};

export type GetOneDataParameterizationInput = {
  where?: Maybe<DataParameterizationFilterFilter>;
};

export type GetOneDiagnosisInput = {
  where?: Maybe<DiagnosisFilterFilter>;
};

export type GetOneDiagnosisTypeInput = {
  where?: Maybe<DiagnosisTypeFilterFilter>;
};

export type GetOneFilesInput = {
  where?: Maybe<FilesFilterFilter>;
};

export type GetOneHabeasDataInput = {
  where?: Maybe<HabeasDataFilterFilter>;
};

export type GetOneHeadquartersInput = {
  where?: Maybe<HeadquartersFilterFilter>;
};

export type GetOneIndicationsPatientInput = {
  where?: Maybe<IndicationsPatientFilterFilter>;
};

export type GetOneInformedConsentInput = {
  where?: Maybe<InformedConsentFilterFilter>;
};

export type GetOneLaboratoryExamsInput = {
  where?: Maybe<LaboratoryExamsFilterFilter>;
};

export type GetOneMedicalSpecialtiesInput = {
  where?: Maybe<MedicalSpecialtiesFilterFilter>;
};

export type GetOneMedicinesInput = {
  where?: Maybe<MedicinesFilterFilter>;
};

export type GetOneMembershipInput = {
  where?: Maybe<MembershipFilterFilter>;
};

export type GetOneNotificationInput = {
  where?: Maybe<NotificationFilterFilter>;
};

export type GetOnePathologiesInput = {
  where?: Maybe<PathologiesFilterFilter>;
};

export type GetOnePatientDataSettingsInput = {
  where?: Maybe<PatientDataSettingsFilterFilter>;
};

export type GetOnePatientSafetyCheckInput = {
  where?: Maybe<PatientSafetyCheckFilterFilter>;
};

export type GetOneProceduresInput = {
  where?: Maybe<ProceduresFilterFilter>;
};

export type GetOneRoleInput = {
  where?: Maybe<RoleFilterFilter>;
};

export type GetOneSettingInput = {
  where?: Maybe<SettingFilterFilter>;
};

export type GetOneTenantInput = {
  where?: Maybe<TenantFilterFilter>;
};

export type GetOneUserAreaInput = {
  where?: Maybe<UserAreaFilterFilter>;
};

export type GetOneUserInput = {
  where?: Maybe<UserFilterFilter>;
  orderBy?: Maybe<OrderByUserInput>;
};

export type GetOneUserPositionInput = {
  where?: Maybe<UserPositionFilterFilter>;
};

export type GetPaginatedDataParameterizationInput = {
  paginator: PaginatorParams;
  where?: Maybe<DataParameterizationFilterFilter>;
  orderBy?: Maybe<OrderByDataParameterizationInput>;
};

export type GetPaginatedDiagnosisInput = {
  paginator: PaginatorParams;
  where?: Maybe<DiagnosisFilterFilter>;
  orderBy?: Maybe<OrderByDiagnosisInput>;
};

export type GetPaginatedDiagnosisTypeInput = {
  paginator: PaginatorParams;
  where?: Maybe<DiagnosisTypeFilterFilter>;
  orderBy?: Maybe<OrderByDiagnosisTypeInput>;
};

export type GetPaginatedFilesInput = {
  paginator: PaginatorParams;
  where?: Maybe<FilesFilterFilter>;
  orderBy?: Maybe<OrderByFilesInput>;
};

export type GetPaginatedHabeasDataInput = {
  paginator: PaginatorParams;
  where?: Maybe<HabeasDataFilterFilter>;
  orderBy?: Maybe<OrderByHabeasDataInput>;
};

export type GetPaginatedHeadquartersInput = {
  paginator: PaginatorParams;
  where?: Maybe<HeadquartersFilterFilter>;
  orderBy?: Maybe<OrderByHeadquartersInput>;
};

export type GetPaginatedIndicationsPatientInput = {
  paginator: PaginatorParams;
  where?: Maybe<IndicationsPatientFilterFilter>;
  orderBy?: Maybe<OrderByIndicationsPatientInput>;
};

export type GetPaginatedInformedConsentInput = {
  paginator: PaginatorParams;
  where?: Maybe<InformedConsentFilterFilter>;
  orderBy?: Maybe<OrderByInformedConsentInput>;
};

export type GetPaginatedLaboratoryExamsInput = {
  paginator: PaginatorParams;
  where?: Maybe<LaboratoryExamsFilterFilter>;
  orderBy?: Maybe<OrderByLaboratoryExamsInput>;
};

export type GetPaginatedMedicalSpecialtiesInput = {
  paginator: PaginatorParams;
  where?: Maybe<MedicalSpecialtiesFilterFilter>;
  orderBy?: Maybe<OrderByMedicalSpecialtiesInput>;
};

export type GetPaginatedMedicinesInput = {
  paginator: PaginatorParams;
  where?: Maybe<MedicinesFilterFilter>;
  orderBy?: Maybe<OrderByMedicinesInput>;
};

export type GetPaginatedMembershipInput = {
  paginator: PaginatorParams;
  where?: Maybe<MembershipFilterFilter>;
  orderBy?: Maybe<OrderByMembershipInput>;
};

export type GetPaginatedNotificationInput = {
  paginator: PaginatorParams;
  where?: Maybe<NotificationFilterFilter>;
  orderBy?: Maybe<OrderByNotificationInput>;
};

export type GetPaginatedPathologiesInput = {
  paginator: PaginatorParams;
  where?: Maybe<PathologiesFilterFilter>;
  orderBy?: Maybe<OrderByPathologiesInput>;
};

export type GetPaginatedPatientDataSettingsInput = {
  paginator: PaginatorParams;
  where?: Maybe<PatientDataSettingsFilterFilter>;
  orderBy?: Maybe<OrderByPatientDataSettingsInput>;
};

export type GetPaginatedPatientSafetyCheckInput = {
  paginator: PaginatorParams;
  where?: Maybe<PatientSafetyCheckFilterFilter>;
  orderBy?: Maybe<OrderByPatientSafetyCheckInput>;
};

export type GetPaginatedProceduresInput = {
  paginator: PaginatorParams;
  where?: Maybe<ProceduresFilterFilter>;
  orderBy?: Maybe<OrderByProceduresInput>;
};

export type GetPaginatedRoleInput = {
  paginator: PaginatorParams;
  where?: Maybe<RoleFilterFilter>;
  orderBy?: Maybe<OrderByRoleInput>;
};

export type GetPaginatedSettingInput = {
  paginator: PaginatorParams;
  where?: Maybe<SettingFilterFilter>;
  orderBy?: Maybe<OrderBySettingInput>;
};

export type GetPaginatedTenantInput = {
  paginator: PaginatorParams;
  where?: Maybe<TenantFilterFilter>;
  orderBy?: Maybe<OrderByTenantInput>;
};

export type GetPaginatedUserAreaInput = {
  paginator: PaginatorParams;
  where?: Maybe<UserAreaFilterFilter>;
  orderBy?: Maybe<OrderByUserAreaInput>;
};

export type GetPaginatedUserPositionInput = {
  paginator: PaginatorParams;
  where?: Maybe<UserPositionFilterFilter>;
  orderBy?: Maybe<OrderByUserPositionInput>;
};

export type GetPaginatedUsersInput = {
  paginator: PaginatorParams;
  where?: Maybe<UserFilterFilter>;
  orderBy?: Maybe<OrderByUserInput>;
};

export type GetUploadSignedUrlInput = {
  filename: Scalars['String'];
  contentType: Scalars['String'];
};

export type GraphQlFilterFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<ProfileFilterFilter>;
  neq?: Maybe<ProfileFilterFilter>;
  gt?: Maybe<ProfileFilterFilter>;
  gte?: Maybe<ProfileFilterFilter>;
  lt?: Maybe<ProfileFilterFilter>;
  lte?: Maybe<ProfileFilterFilter>;
  like?: Maybe<ProfileFilterFilter>;
  notLike?: Maybe<ProfileFilterFilter>;
  iLike?: Maybe<ProfileFilterFilter>;
  notILike?: Maybe<ProfileFilterFilter>;
  in?: Maybe<Array<ProfileFilterFilter>>;
  notIn?: Maybe<Array<ProfileFilterFilter>>;
};

export type HabeasDataFilterFilter = {
  and?: Maybe<Array<HabeasDataFilterFilter>>;
  or?: Maybe<Array<HabeasDataFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type HabeasDataResponse = {
  id: Scalars['ID'];
  description: Scalars['String'];
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HeadquartersFilterFilter = {
  and?: Maybe<Array<HeadquartersFilterFilter>>;
  or?: Maybe<Array<HeadquartersFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  city?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  address?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type HeadquartersResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
  city: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  address: Scalars['String'];
  manager: SolvedEntityResponse;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18nMessageResponse = {
  es: Scalars['String'];
  en: Scalars['String'];
  de?: Maybe<Scalars['String']>;
  pt?: Maybe<Scalars['String']>;
  it?: Maybe<Scalars['String']>;
  ru?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
};

export type IdFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['ID']>;
  neq?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  like?: Maybe<Scalars['ID']>;
  notLike?: Maybe<Scalars['ID']>;
  iLike?: Maybe<Scalars['ID']>;
  notILike?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  notIn?: Maybe<Array<Scalars['ID']>>;
};

export type IndicationsPatientFilterFilter = {
  and?: Maybe<Array<IndicationsPatientFilterFilter>>;
  or?: Maybe<Array<IndicationsPatientFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type IndicationsPatientResponse = {
  id: Scalars['ID'];
  description: Scalars['String'];
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InformedConsentFilterFilter = {
  and?: Maybe<Array<InformedConsentFilterFilter>>;
  or?: Maybe<Array<InformedConsentFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type InformedConsentResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JwtAuthenticatedResponse = {
  user: AuthUserResponse;
  roles: Array<AuthRoleResponse>;
  providerData: AuthProviderDataResponse;
  access_token: Scalars['String'];
};

export type LaboratoryExamsFilterFilter = {
  and?: Maybe<Array<LaboratoryExamsFilterFilter>>;
  or?: Maybe<Array<LaboratoryExamsFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type LaboratoryExamsResponse = {
  id: Scalars['ID'];
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MedicalSpecialtiesFilterFilter = {
  and?: Maybe<Array<MedicalSpecialtiesFilterFilter>>;
  or?: Maybe<Array<MedicalSpecialtiesFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type MedicalSpecialtiesResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MedicinesFilterFilter = {
  and?: Maybe<Array<MedicinesFilterFilter>>;
  or?: Maybe<Array<MedicinesFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type MedicinesResponse = {
  id: Scalars['ID'];
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MembershipFilterFilter = {
  and?: Maybe<Array<MembershipFilterFilter>>;
  or?: Maybe<Array<MembershipFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  validity?: Maybe<StringFieldComparison>;
  daysAfterExpired?: Maybe<StringFieldComparison>;
  limitPatients?: Maybe<StringFieldComparison>;
  limitHeadquarters?: Maybe<StringFieldComparison>;
  administrativeUserQuantity?: Maybe<StringFieldComparison>;
  medicalUserQuantity?: Maybe<StringFieldComparison>;
  NumberSmsAllowed?: Maybe<StringFieldComparison>;
  hoursAllowedVideoConsultation?: Maybe<StringFieldComparison>;
  additionalCostHeadquarters?: Maybe<StringFieldComparison>;
  additionalCostPerAdministrativeUser?: Maybe<StringFieldComparison>;
  additionalCostPerMedicalUser?: Maybe<StringFieldComparison>;
  additionalCostHoursVideoConsultation?: Maybe<StringFieldComparison>;
  additionalCostSmsPackage?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type MembershipResponse = {
  id: Scalars['ID'];
  cost?: Maybe<Scalars['Float']>;
  validity: TaxType;
  daysAfterExpired?: Maybe<Scalars['Float']>;
  voiceTranscription: Scalars['Boolean'];
  limitedNumberPatients: Scalars['Boolean'];
  limitPatients?: Maybe<Scalars['Float']>;
  useLogo: Scalars['Boolean'];
  limitedNumberHeadquarters: Scalars['Boolean'];
  limitHeadquarters?: Maybe<Scalars['Float']>;
  administrativeUserQuantity?: Maybe<Scalars['Float']>;
  medicalUserQuantity?: Maybe<Scalars['Float']>;
  sendingEmailMedicalPrescription: Scalars['Boolean'];
  sendingWhatsappMedicalPrescription: Scalars['Boolean'];
  generateConsentDigitally: Scalars['Boolean'];
  schedulingAppointmentsWeb: Scalars['Boolean'];
  appointmentWotificationWhatsApp: Scalars['Boolean'];
  appointmentWotificationMail: Scalars['Boolean'];
  appointmentWotificationSms: Scalars['Boolean'];
  appointmentReminderWhatsApp: Scalars['Boolean'];
  appointmentReminderMail: Scalars['Boolean'];
  appointmentReminderSms: Scalars['Boolean'];
  NumberSmsAllowed?: Maybe<Scalars['Float']>;
  sendingMessagesSpecialDates: Scalars['Boolean'];
  sendingMailSpecialDates: Scalars['Boolean'];
  sendingWhatsAppSpecialDates: Scalars['Boolean'];
  allowPromotionalEmailing: Scalars['Boolean'];
  AllowQuotesClients: Scalars['Boolean'];
  inventoryAndBilling: Scalars['Boolean'];
  hoursAllowedVideoConsultation?: Maybe<Scalars['Float']>;
  integrationWithPaymentGateway: Scalars['Boolean'];
  additionalCostHeadquarters?: Maybe<Scalars['Float']>;
  additionalCostPerAdministrativeUser?: Maybe<Scalars['Float']>;
  additionalCostPerMedicalUser?: Maybe<Scalars['Float']>;
  additionalCostHoursVideoConsultation?: Maybe<Scalars['Float']>;
  additionalCostSmsPackage?: Maybe<Scalars['Float']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  createTenant?: Maybe<Scalars['Void']>;
  updateTenant?: Maybe<Scalars['Void']>;
  deleteTenant?: Maybe<Scalars['Void']>;
  createUser?: Maybe<Scalars['Void']>;
  updateUser?: Maybe<Scalars['Void']>;
  deleteUser?: Maybe<Scalars['Void']>;
  deleteManyUser?: Maybe<Scalars['Void']>;
  changePassword?: Maybe<Scalars['Void']>;
  resetPassword?: Maybe<Scalars['Void']>;
  updateMe?: Maybe<Scalars['Void']>;
  updateNotification?: Maybe<Scalars['Void']>;
  deleteNotification?: Maybe<Scalars['Void']>;
  deleteManyNotification?: Maybe<Scalars['Void']>;
  sendNotification?: Maybe<Scalars['Void']>;
  createRole?: Maybe<Scalars['Void']>;
  updateRole?: Maybe<Scalars['Void']>;
  deleteRole?: Maybe<Scalars['Void']>;
  deleteManyRole?: Maybe<Scalars['Void']>;
  createUserArea?: Maybe<Scalars['Void']>;
  updateUserArea?: Maybe<Scalars['Void']>;
  deleteUserArea?: Maybe<Scalars['Void']>;
  deleteManyUserArea?: Maybe<Scalars['Void']>;
  createUserPosition?: Maybe<Scalars['Void']>;
  updateUserPosition?: Maybe<Scalars['Void']>;
  deleteUserPosition?: Maybe<Scalars['Void']>;
  deleteManyUserPosition?: Maybe<Scalars['Void']>;
  signIn: JwtAuthenticatedResponse;
  signUp?: Maybe<Scalars['Void']>;
  confirmUser?: Maybe<Scalars['Void']>;
  forgotPassword?: Maybe<Scalars['Void']>;
  createUploadedFile?: Maybe<Scalars['Void']>;
  createFiles?: Maybe<Scalars['Void']>;
  updateFiles?: Maybe<Scalars['Void']>;
  deleteFiles?: Maybe<Scalars['Void']>;
  deleteManyFiles?: Maybe<Scalars['Void']>;
  createHeadquarters?: Maybe<Scalars['Void']>;
  updateHeadquarters?: Maybe<Scalars['Void']>;
  deleteHeadquarters?: Maybe<Scalars['Void']>;
  deleteManyHeadquarters?: Maybe<Scalars['Void']>;
  createSetting?: Maybe<Scalars['Void']>;
  updateSetting?: Maybe<Scalars['Void']>;
  deleteSetting?: Maybe<Scalars['Void']>;
  deleteManySetting?: Maybe<Scalars['Void']>;
  createMembership?: Maybe<Scalars['Void']>;
  updateMembership?: Maybe<Scalars['Void']>;
  deleteMembership?: Maybe<Scalars['Void']>;
  deleteManyMembership?: Maybe<Scalars['Void']>;
  createDataParameterization?: Maybe<Scalars['Void']>;
  updateDataParameterization?: Maybe<Scalars['Void']>;
  deleteDataParameterization?: Maybe<Scalars['Void']>;
  deleteManyDataParameterization?: Maybe<Scalars['Void']>;
  createPatientDataSettings?: Maybe<Scalars['Void']>;
  updatePatientDataSettings?: Maybe<Scalars['Void']>;
  deletePatientDataSettings?: Maybe<Scalars['Void']>;
  deleteManyPatientDataSettings?: Maybe<Scalars['Void']>;
  createMedicalSpecialties?: Maybe<Scalars['Void']>;
  updateMedicalSpecialties?: Maybe<Scalars['Void']>;
  deleteMedicalSpecialties?: Maybe<Scalars['Void']>;
  deleteManyMedicalSpecialties?: Maybe<Scalars['Void']>;
  createDiagnosisType?: Maybe<Scalars['Void']>;
  updateDiagnosisType?: Maybe<Scalars['Void']>;
  deleteDiagnosisType?: Maybe<Scalars['Void']>;
  deleteManyDiagnosisType?: Maybe<Scalars['Void']>;
  createDiagnosis?: Maybe<Scalars['Void']>;
  updateDiagnosis?: Maybe<Scalars['Void']>;
  deleteDiagnosis?: Maybe<Scalars['Void']>;
  deleteManyDiagnosis?: Maybe<Scalars['Void']>;
  createProcedures?: Maybe<Scalars['Void']>;
  updateProcedures?: Maybe<Scalars['Void']>;
  deleteProcedures?: Maybe<Scalars['Void']>;
  deleteManyProcedures?: Maybe<Scalars['Void']>;
  createIndicationsPatient?: Maybe<Scalars['Void']>;
  updateIndicationsPatient?: Maybe<Scalars['Void']>;
  deleteIndicationsPatient?: Maybe<Scalars['Void']>;
  deleteManyIndicationsPatient?: Maybe<Scalars['Void']>;
  createHabeasData?: Maybe<Scalars['Void']>;
  updateHabeasData?: Maybe<Scalars['Void']>;
  deleteHabeasData?: Maybe<Scalars['Void']>;
  deleteManyHabeasData?: Maybe<Scalars['Void']>;
  createInformedConsent?: Maybe<Scalars['Void']>;
  updateInformedConsent?: Maybe<Scalars['Void']>;
  deleteInformedConsent?: Maybe<Scalars['Void']>;
  deleteManyInformedConsent?: Maybe<Scalars['Void']>;
  createPatientSafetyCheck?: Maybe<Scalars['Void']>;
  updatePatientSafetyCheck?: Maybe<Scalars['Void']>;
  deletePatientSafetyCheck?: Maybe<Scalars['Void']>;
  deleteManyPatientSafetyCheck?: Maybe<Scalars['Void']>;
  createLaboratoryExams?: Maybe<Scalars['Void']>;
  updateLaboratoryExams?: Maybe<Scalars['Void']>;
  deleteLaboratoryExams?: Maybe<Scalars['Void']>;
  deleteManyLaboratoryExams?: Maybe<Scalars['Void']>;
  createMedicines?: Maybe<Scalars['Void']>;
  updateMedicines?: Maybe<Scalars['Void']>;
  deleteMedicines?: Maybe<Scalars['Void']>;
  deleteManyMedicines?: Maybe<Scalars['Void']>;
  createPathologies?: Maybe<Scalars['Void']>;
  updatePathologies?: Maybe<Scalars['Void']>;
  deletePathologies?: Maybe<Scalars['Void']>;
  deleteManyPathologies?: Maybe<Scalars['Void']>;
};


export type MutationCreateTenantArgs = {
  input: CreateTenantInput;
};


export type MutationUpdateTenantArgs = {
  input: UpdateTenantInput;
};


export type MutationDeleteTenantArgs = {
  input: DeleteTenantInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteManyUserArgs = {
  input: DeleteManyUserInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationUpdateMeArgs = {
  input: UpdateMeInput;
};


export type MutationUpdateNotificationArgs = {
  input: UpdateNotificationInput;
};


export type MutationDeleteNotificationArgs = {
  input: DeleteNotificationInput;
};


export type MutationDeleteManyNotificationArgs = {
  input: DeleteManyNotificationInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};


export type MutationDeleteManyRoleArgs = {
  input: DeleteManyRoleInput;
};


export type MutationCreateUserAreaArgs = {
  input: CreateUserAreaInput;
};


export type MutationUpdateUserAreaArgs = {
  input: UpdateUserAreaInput;
};


export type MutationDeleteUserAreaArgs = {
  input: DeleteUserAreaInput;
};


export type MutationDeleteManyUserAreaArgs = {
  input: DeleteManyUserAreaInput;
};


export type MutationCreateUserPositionArgs = {
  input: CreateUserPositionInput;
};


export type MutationUpdateUserPositionArgs = {
  input: UpdateUserPositionInput;
};


export type MutationDeleteUserPositionArgs = {
  input: DeleteUserPositionInput;
};


export type MutationDeleteManyUserPositionArgs = {
  input: DeleteManyUserPositionInput;
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationCreateUploadedFileArgs = {
  input: CreateUploadedFileInput;
};


export type MutationCreateFilesArgs = {
  input: CreateFilesInput;
};


export type MutationUpdateFilesArgs = {
  input: UpdateFilesInput;
};


export type MutationDeleteFilesArgs = {
  input: DeleteFilesInput;
};


export type MutationDeleteManyFilesArgs = {
  input: DeleteManyFilesInput;
};


export type MutationCreateHeadquartersArgs = {
  input: CreateHeadquartersInput;
};


export type MutationUpdateHeadquartersArgs = {
  input: UpdateHeadquartersInput;
};


export type MutationDeleteHeadquartersArgs = {
  input: DeleteHeadquartersInput;
};


export type MutationDeleteManyHeadquartersArgs = {
  input: DeleteManyHeadquartersInput;
};


export type MutationCreateSettingArgs = {
  input: CreateSettingInput;
};


export type MutationUpdateSettingArgs = {
  input: UpdateSettingInput;
};


export type MutationDeleteSettingArgs = {
  input: DeleteSettingInput;
};


export type MutationDeleteManySettingArgs = {
  input: DeleteManySettingInput;
};


export type MutationCreateMembershipArgs = {
  input: CreateMembershipInput;
};


export type MutationUpdateMembershipArgs = {
  input: UpdateMembershipInput;
};


export type MutationDeleteMembershipArgs = {
  input: DeleteMembershipInput;
};


export type MutationDeleteManyMembershipArgs = {
  input: DeleteManyMembershipInput;
};


export type MutationCreateDataParameterizationArgs = {
  input: CreateDataParameterizationInput;
};


export type MutationUpdateDataParameterizationArgs = {
  input: UpdateDataParameterizationInput;
};


export type MutationDeleteDataParameterizationArgs = {
  input: DeleteDataParameterizationInput;
};


export type MutationDeleteManyDataParameterizationArgs = {
  input: DeleteManyDataParameterizationInput;
};


export type MutationCreatePatientDataSettingsArgs = {
  input: CreatePatientDataSettingsInput;
};


export type MutationUpdatePatientDataSettingsArgs = {
  input: UpdatePatientDataSettingsInput;
};


export type MutationDeletePatientDataSettingsArgs = {
  input: DeletePatientDataSettingsInput;
};


export type MutationDeleteManyPatientDataSettingsArgs = {
  input: DeleteManyPatientDataSettingsInput;
};


export type MutationCreateMedicalSpecialtiesArgs = {
  input: CreateMedicalSpecialtiesInput;
};


export type MutationUpdateMedicalSpecialtiesArgs = {
  input: UpdateMedicalSpecialtiesInput;
};


export type MutationDeleteMedicalSpecialtiesArgs = {
  input: DeleteMedicalSpecialtiesInput;
};


export type MutationDeleteManyMedicalSpecialtiesArgs = {
  input: DeleteManyMedicalSpecialtiesInput;
};


export type MutationCreateDiagnosisTypeArgs = {
  input: CreateDiagnosisTypeInput;
};


export type MutationUpdateDiagnosisTypeArgs = {
  input: UpdateDiagnosisTypeInput;
};


export type MutationDeleteDiagnosisTypeArgs = {
  input: DeleteDiagnosisTypeInput;
};


export type MutationDeleteManyDiagnosisTypeArgs = {
  input: DeleteManyDiagnosisTypeInput;
};


export type MutationCreateDiagnosisArgs = {
  input: CreateDiagnosisInput;
};


export type MutationUpdateDiagnosisArgs = {
  input: UpdateDiagnosisInput;
};


export type MutationDeleteDiagnosisArgs = {
  input: DeleteDiagnosisInput;
};


export type MutationDeleteManyDiagnosisArgs = {
  input: DeleteManyDiagnosisInput;
};


export type MutationCreateProceduresArgs = {
  input: CreateProceduresInput;
};


export type MutationUpdateProceduresArgs = {
  input: UpdateProceduresInput;
};


export type MutationDeleteProceduresArgs = {
  input: DeleteProceduresInput;
};


export type MutationDeleteManyProceduresArgs = {
  input: DeleteManyProceduresInput;
};


export type MutationCreateIndicationsPatientArgs = {
  input: CreateIndicationsPatientInput;
};


export type MutationUpdateIndicationsPatientArgs = {
  input: UpdateIndicationsPatientInput;
};


export type MutationDeleteIndicationsPatientArgs = {
  input: DeleteIndicationsPatientInput;
};


export type MutationDeleteManyIndicationsPatientArgs = {
  input: DeleteManyIndicationsPatientInput;
};


export type MutationCreateHabeasDataArgs = {
  input: CreateHabeasDataInput;
};


export type MutationUpdateHabeasDataArgs = {
  input: UpdateHabeasDataInput;
};


export type MutationDeleteHabeasDataArgs = {
  input: DeleteHabeasDataInput;
};


export type MutationDeleteManyHabeasDataArgs = {
  input: DeleteManyHabeasDataInput;
};


export type MutationCreateInformedConsentArgs = {
  input: CreateInformedConsentInput;
};


export type MutationUpdateInformedConsentArgs = {
  input: UpdateInformedConsentInput;
};


export type MutationDeleteInformedConsentArgs = {
  input: DeleteInformedConsentInput;
};


export type MutationDeleteManyInformedConsentArgs = {
  input: DeleteManyInformedConsentInput;
};


export type MutationCreatePatientSafetyCheckArgs = {
  input: CreatePatientSafetyCheckInput;
};


export type MutationUpdatePatientSafetyCheckArgs = {
  input: UpdatePatientSafetyCheckInput;
};


export type MutationDeletePatientSafetyCheckArgs = {
  input: DeletePatientSafetyCheckInput;
};


export type MutationDeleteManyPatientSafetyCheckArgs = {
  input: DeleteManyPatientSafetyCheckInput;
};


export type MutationCreateLaboratoryExamsArgs = {
  input: CreateLaboratoryExamsInput;
};


export type MutationUpdateLaboratoryExamsArgs = {
  input: UpdateLaboratoryExamsInput;
};


export type MutationDeleteLaboratoryExamsArgs = {
  input: DeleteLaboratoryExamsInput;
};


export type MutationDeleteManyLaboratoryExamsArgs = {
  input: DeleteManyLaboratoryExamsInput;
};


export type MutationCreateMedicinesArgs = {
  input: CreateMedicinesInput;
};


export type MutationUpdateMedicinesArgs = {
  input: UpdateMedicinesInput;
};


export type MutationDeleteMedicinesArgs = {
  input: DeleteMedicinesInput;
};


export type MutationDeleteManyMedicinesArgs = {
  input: DeleteManyMedicinesInput;
};


export type MutationCreatePathologiesArgs = {
  input: CreatePathologiesInput;
};


export type MutationUpdatePathologiesArgs = {
  input: UpdatePathologiesInput;
};


export type MutationDeletePathologiesArgs = {
  input: DeletePathologiesInput;
};


export type MutationDeleteManyPathologiesArgs = {
  input: DeleteManyPathologiesInput;
};

export type NotificationFilterFilter = {
  and?: Maybe<Array<NotificationFilterFilter>>;
  or?: Maybe<Array<NotificationFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  type?: Maybe<NotificationTypeFilterComparison>;
  isRead?: Maybe<BooleanFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type NotificationResponse = {
  id: Scalars['ID'];
  message?: Maybe<I18nMessageResponse>;
  type?: Maybe<NotificationType>;
  isRead?: Maybe<Scalars['Boolean']>;
  toUser?: Maybe<SolvedEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum NotificationType {
  ReactionPost = 'REACTION_POST',
  ReactionComment = 'REACTION_COMMENT',
  ReactionProject = 'REACTION_PROJECT',
  ReactionProjectComment = 'REACTION_PROJECT_COMMENT',
  ResponseComment = 'RESPONSE_COMMENT',
  CommentPost = 'COMMENT_POST',
  CommentProject = 'COMMENT_PROJECT',
  ForgotPassword = 'FORGOT_PASSWORD',
  Internal = 'INTERNAL',
  TicketCreated = 'TICKET_CREATED',
  TicketResponse = 'TICKET_RESPONSE',
  CalendarEventInvited = 'CALENDAR_EVENT_INVITED',
  CalendarEventUpdated = 'CALENDAR_EVENT_UPDATED',
  CalendarEventDeleted = 'CALENDAR_EVENT_DELETED',
  CreatedCourse = 'CREATED_COURSE',
  CreatedProject = 'CREATED_PROJECT',
  CreatedCertification = 'CREATED_CERTIFICATION',
  CreatedLessonComment = 'CREATED_LESSON_COMMENT',
  FinishLesson = 'FINISH_LESSON',
  ApprovalFinalExam = 'APPROVAL_FINAL_EXAM',
  ApprovalQuiz = 'APPROVAL_QUIZ',
  DisapprovalFinalExam = 'DISAPPROVAL_FINAL_EXAM',
  DisapprovalQuiz = 'DISAPPROVAL_QUIZ',
  TranscodeError = 'TRANSCODE_ERROR',
  TranscodeSuccess = 'TRANSCODE_SUCCESS'
}

export type NotificationTypeFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<NotificationType>;
  neq?: Maybe<NotificationType>;
  gt?: Maybe<NotificationType>;
  gte?: Maybe<NotificationType>;
  lt?: Maybe<NotificationType>;
  lte?: Maybe<NotificationType>;
  like?: Maybe<NotificationType>;
  notLike?: Maybe<NotificationType>;
  iLike?: Maybe<NotificationType>;
  notILike?: Maybe<NotificationType>;
  in?: Maybe<Array<NotificationType>>;
  notIn?: Maybe<Array<NotificationType>>;
};

export type OrderByDataParameterizationInput = {
  paymentDeadlines?: Maybe<OrderByType>;
  deadlineForPaymentReminder?: Maybe<OrderByType>;
  deadlineForAppointmentReminder?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByDiagnosisInput = {
  code?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByDiagnosisTypeInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByFilesInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByHabeasDataInput = {
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByHeadquartersInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByIndicationsPatientInput = {
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByInformedConsentInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByLaboratoryExamsInput = {
  code?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByMedicalSpecialtiesInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByMedicinesInput = {
  code?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByMembershipInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByNotificationInput = {
  type?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByPathologiesInput = {
  code?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByPatientDataSettingsInput = {
  createdAt?: Maybe<OrderByType>;
};

export type OrderByPatientSafetyCheckInput = {
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByProceduresInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByRoleInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderBySettingInput = {
  email?: Maybe<OrderByType>;
  address?: Maybe<OrderByType>;
  phoneNumber?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByTenantInput = {
  id?: Maybe<OrderByType>;
  updatedAt?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
  code?: Maybe<OrderByType>;
  name?: Maybe<OrderByType>;
  email?: Maybe<OrderByType>;
};

export enum OrderByType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderByUserAreaInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByUserInput = {
  id?: Maybe<OrderByType>;
  updatedAt?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
  email?: Maybe<OrderByType>;
  username?: Maybe<OrderByType>;
  firstname?: Maybe<OrderByType>;
  lastname?: Maybe<OrderByType>;
  lastLogin?: Maybe<OrderByType>;
};

export type OrderByUserPositionInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export enum Provider {
  Local = 'LOCAL',
  Google = 'GOOGLE'
}

export type PaginatedDataParameterizationResponse = {
  items: Array<DataParameterizationResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedDiagnosisResponse = {
  items: Array<DiagnosisResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedDiagnosisTypeResponse = {
  items: Array<DiagnosisTypeResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedFilesResponse = {
  items: Array<FilesResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedHabeasDataResponse = {
  items: Array<HabeasDataResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedHeadquartersResponse = {
  items: Array<HeadquartersResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedIndicationsPatientResponse = {
  items: Array<IndicationsPatientResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedInformedConsentResponse = {
  items: Array<InformedConsentResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedLaboratoryExamsResponse = {
  items: Array<LaboratoryExamsResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedMedicalSpecialtiesResponse = {
  items: Array<MedicalSpecialtiesResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedMedicinesResponse = {
  items: Array<MedicinesResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedMembershipResponse = {
  items: Array<MembershipResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedNotificationResponse = {
  items: Array<NotificationResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedPathologiesResponse = {
  items: Array<PathologiesResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedPatientDataSettingsResponse = {
  items: Array<PatientDataSettingsResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedPatientSafetyCheckResponse = {
  items: Array<PatientSafetyCheckResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedProceduresResponse = {
  items: Array<ProceduresResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedRoleResponse = {
  items: Array<RoleResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedSettingResponse = {
  items: Array<SettingResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedTenantResponse = {
  items: Array<TenantResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedUserAreaResponse = {
  items: Array<UserAreaResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedUserPositionResponse = {
  items: Array<UserPositionResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedUsers = {
  items: Array<UserResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatorParams = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type PartialDataParameterizationInput = {
  paymentDeadlines?: Maybe<Scalars['Float']>;
  deadlineForPaymentReminder?: Maybe<Scalars['Float']>;
  deadlineForAppointmentReminder?: Maybe<Scalars['Float']>;
};

export type PartialDiagnosisInput = {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialDiagnosisTypeInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialFilesInput = {
  url?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  bytes?: Maybe<Scalars['Float']>;
  storage?: Maybe<FileStorageType>;
  status?: Maybe<FileStatus>;
};

export type PartialHabeasDataInput = {
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialHeadquartersInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  manager?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialIndicationsPatientInput = {
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialInformedConsentInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialLaboratoryExamsInput = {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialMedicalSpecialtiesInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialMedicinesInput = {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialMembershipInput = {
  cost?: Maybe<Scalars['Float']>;
  validity?: Maybe<TaxType>;
  daysAfterExpired?: Maybe<Scalars['Int']>;
  voiceTranscription?: Maybe<Scalars['Boolean']>;
  limitedNumberPatients?: Maybe<Scalars['Boolean']>;
  limitPatients?: Maybe<Scalars['Int']>;
  useLogo?: Maybe<Scalars['Boolean']>;
  limitedNumberHeadquarters?: Maybe<Scalars['Boolean']>;
  limitHeadquarters?: Maybe<Scalars['Int']>;
  administrativeUserQuantity?: Maybe<Scalars['Int']>;
  medicalUserQuantity?: Maybe<Scalars['Int']>;
  sendingEmailMedicalPrescription?: Maybe<Scalars['Boolean']>;
  sendingWhatsappMedicalPrescription?: Maybe<Scalars['Boolean']>;
  generateConsentDigitally?: Maybe<Scalars['Boolean']>;
  schedulingAppointmentsWeb?: Maybe<Scalars['Boolean']>;
  appointmentWotificationWhatsApp?: Maybe<Scalars['Boolean']>;
  appointmentWotificationMail?: Maybe<Scalars['Boolean']>;
  appointmentWotificationSms?: Maybe<Scalars['Boolean']>;
  appointmentReminderWhatsApp?: Maybe<Scalars['Boolean']>;
  appointmentReminderMail?: Maybe<Scalars['Boolean']>;
  appointmentReminderSms?: Maybe<Scalars['Boolean']>;
  NumberSmsAllowed?: Maybe<Scalars['Int']>;
  sendingMessagesSpecialDates?: Maybe<Scalars['Boolean']>;
  sendingMailSpecialDates?: Maybe<Scalars['Boolean']>;
  sendingWhatsAppSpecialDates?: Maybe<Scalars['Boolean']>;
  allowPromotionalEmailing?: Maybe<Scalars['Boolean']>;
  AllowQuotesClients?: Maybe<Scalars['Boolean']>;
  inventoryAndBilling?: Maybe<Scalars['Boolean']>;
  hoursAllowedVideoConsultation?: Maybe<Scalars['Int']>;
  integrationWithPaymentGateway?: Maybe<Scalars['Boolean']>;
  additionalCostHeadquarters?: Maybe<Scalars['Float']>;
  additionalCostPerAdministrativeUser?: Maybe<Scalars['Float']>;
  additionalCostPerMedicalUser?: Maybe<Scalars['Float']>;
  additionalCostHoursVideoConsultation?: Maybe<Scalars['Float']>;
  additionalCostSmsPackage?: Maybe<Scalars['Float']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialNotificationInput = {
  isRead?: Maybe<Scalars['Boolean']>;
};

export type PartialPathologiesInput = {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialPatientDataSettingsInput = {
  firstName?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['Boolean']>;
  firstSurname?: Maybe<Scalars['Boolean']>;
  lastSurname?: Maybe<Scalars['Boolean']>;
  dateOfBirth?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['Boolean']>;
  maritalStatus?: Maybe<Scalars['Boolean']>;
  bloodType?: Maybe<Scalars['Boolean']>;
  vitalStatus?: Maybe<Scalars['Boolean']>;
  contactInformation?: Maybe<Scalars['Boolean']>;
  landlinePhoneNumber?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['Boolean']>;
  patientHeadquarters?: Maybe<Scalars['Boolean']>;
  mainAddress?: Maybe<Scalars['Boolean']>;
  secondaryHeadquarters?: Maybe<Scalars['Boolean']>;
  countryDepartmentCity?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['Boolean']>;
  socialSecurity?: Maybe<Scalars['Boolean']>;
  affiliateType?: Maybe<Scalars['Boolean']>;
  affiliateTypeSsg?: Maybe<Scalars['Boolean']>;
  educationLevel?: Maybe<Scalars['Boolean']>;
  ethnicGroup?: Maybe<Scalars['Boolean']>;
  populationGroup?: Maybe<Scalars['Boolean']>;
  occupation?: Maybe<Scalars['Boolean']>;
  eps?: Maybe<Scalars['Boolean']>;
  affiliateDate?: Maybe<Scalars['Boolean']>;
  prepaid?: Maybe<Scalars['Boolean']>;
  benefitPlan?: Maybe<Scalars['Boolean']>;
  healthCareProgram?: Maybe<Scalars['Boolean']>;
  generalNotesAttention?: Maybe<Scalars['Boolean']>;
  contractNumber?: Maybe<Scalars['Boolean']>;
  occupationalRiskManagement?: Maybe<Scalars['Boolean']>;
  pensionFundManagement?: Maybe<Scalars['Boolean']>;
  companion?: Maybe<Scalars['Boolean']>;
  companionName?: Maybe<Scalars['Boolean']>;
  kinshipCompanion?: Maybe<Scalars['Boolean']>;
  companionPhone?: Maybe<Scalars['Boolean']>;
};

export type PartialPatientSafetyCheckInput = {
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialPermitsInput = {
  module?: Maybe<App_Modules>;
  action?: Maybe<Action_List>;
};

export type PartialProceduresInput = {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialProfileInput = {
  country?: Maybe<Scalars['String']>;
  gender?: Maybe<UserGender>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  birthDay?: Maybe<Scalars['String']>;
  personalWeb?: Maybe<Scalars['String']>;
  btcWallet?: Maybe<Scalars['String']>;
  tronWallet?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  aboutMe?: Maybe<Scalars['String']>;
  isLeader?: Maybe<Scalars['Boolean']>;
  area?: Maybe<Scalars['ID']>;
  position?: Maybe<Scalars['ID']>;
};

export type PartialRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  permits?: Maybe<Array<PartialPermitsInput>>;
};

export type PartialSettingInput = {
  email?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Scalars['ID']>;
};

export type PartialTenantInput = {
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  info?: Maybe<TenantInfoInput>;
};

export type PartialUserAreaInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialUserInput = {
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['ID']>>;
  isActive?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  avatarFile?: Maybe<Scalars['ID']>;
  profile?: Maybe<PartialProfileInput>;
};

export type PartialUserPositionInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PathologiesFilterFilter = {
  and?: Maybe<Array<PathologiesFilterFilter>>;
  or?: Maybe<Array<PathologiesFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type PathologiesResponse = {
  id: Scalars['ID'];
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PatientDataSettingsFilterFilter = {
  and?: Maybe<Array<PatientDataSettingsFilterFilter>>;
  or?: Maybe<Array<PatientDataSettingsFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type PatientDataSettingsResponse = {
  id: Scalars['ID'];
  firstName: Scalars['Boolean'];
  lastName: Scalars['Boolean'];
  firstSurname: Scalars['Boolean'];
  lastSurname: Scalars['Boolean'];
  dateOfBirth: Scalars['Boolean'];
  gender: Scalars['Boolean'];
  maritalStatus: Scalars['Boolean'];
  bloodType: Scalars['Boolean'];
  vitalStatus: Scalars['Boolean'];
  contactInformation: Scalars['Boolean'];
  landlinePhoneNumber: Scalars['Boolean'];
  phoneNumber: Scalars['Boolean'];
  patientHeadquarters: Scalars['Boolean'];
  mainAddress: Scalars['Boolean'];
  secondaryHeadquarters: Scalars['Boolean'];
  countryDepartmentCity: Scalars['Boolean'];
  email: Scalars['Boolean'];
  socialSecurity: Scalars['Boolean'];
  affiliateType: Scalars['Boolean'];
  affiliateTypeSsg: Scalars['Boolean'];
  educationLevel: Scalars['Boolean'];
  ethnicGroup: Scalars['Boolean'];
  populationGroup: Scalars['Boolean'];
  occupation: Scalars['Boolean'];
  eps: Scalars['Boolean'];
  affiliateDate: Scalars['Boolean'];
  prepaid: Scalars['Boolean'];
  benefitPlan: Scalars['Boolean'];
  healthCareProgram: Scalars['Boolean'];
  generalNotesAttention: Scalars['Boolean'];
  contractNumber: Scalars['Boolean'];
  occupationalRiskManagement: Scalars['Boolean'];
  pensionFundManagement: Scalars['Boolean'];
  companion: Scalars['Boolean'];
  companionName: Scalars['Boolean'];
  kinshipCompanion: Scalars['Boolean'];
  companionPhone: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PatientSafetyCheckFilterFilter = {
  and?: Maybe<Array<PatientSafetyCheckFilterFilter>>;
  or?: Maybe<Array<PatientSafetyCheckFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type PatientSafetyCheckResponse = {
  id: Scalars['ID'];
  description: Scalars['String'];
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PermitsInput = {
  module: App_Modules;
  action: Action_List;
};

export type PermitsResponse = {
  module: App_Modules;
  action: Action_List;
};

export type ProceduresFilterFilter = {
  and?: Maybe<Array<ProceduresFilterFilter>>;
  or?: Maybe<Array<ProceduresFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ProceduresResponse = {
  id: Scalars['ID'];
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProfileFilterFilter = {
  and?: Maybe<Array<ProfileFilterFilter>>;
  or?: Maybe<Array<ProfileFilterFilter>>;
  country?: Maybe<StringFieldComparison>;
  gender?: Maybe<GenderFilterComparison>;
  zipCode?: Maybe<StringFieldComparison>;
  city?: Maybe<StringFieldComparison>;
  address?: Maybe<StringFieldComparison>;
  state?: Maybe<StringFieldComparison>;
  birthDay?: Maybe<StringFieldComparison>;
  personalWeb?: Maybe<StringFieldComparison>;
  btcWallet?: Maybe<StringFieldComparison>;
  tronWallet?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  aboutMe?: Maybe<StringFieldComparison>;
  isLeader?: Maybe<BooleanFieldComparison>;
  area?: Maybe<IdFilterComparison>;
  position?: Maybe<IdFilterComparison>;
};

export type ProfileInput = {
  country?: Maybe<Scalars['String']>;
  gender?: Maybe<UserGender>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  birthDay?: Maybe<Scalars['String']>;
  personalWeb?: Maybe<Scalars['String']>;
  btcWallet?: Maybe<Scalars['String']>;
  tronWallet?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  aboutMe?: Maybe<Scalars['String']>;
  isLeader?: Maybe<Scalars['Boolean']>;
  area?: Maybe<Scalars['ID']>;
  position?: Maybe<Scalars['ID']>;
};

export type ProfileResponse = {
  country?: Maybe<Scalars['String']>;
  gender?: Maybe<UserGender>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  birthDay?: Maybe<Scalars['String']>;
  personalWeb?: Maybe<Scalars['String']>;
  btcWallet?: Maybe<Scalars['String']>;
  tronWallet?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  aboutMe?: Maybe<Scalars['String']>;
  isLeader?: Maybe<Scalars['Boolean']>;
  area?: Maybe<SolvedEntityResponse>;
  position?: Maybe<SolvedEntityResponse>;
};

export type Query = {
  getAllTenant?: Maybe<Array<TenantResponse>>;
  getRequestTenant?: Maybe<TenantResponse>;
  getOneTenant?: Maybe<TenantResponse>;
  getAllSimplifiedTenantsInfo?: Maybe<Array<SimplifiedTenantResponse>>;
  getPaginatedTenant: PaginatedTenantResponse;
  getAllUsers: Array<UserResponse>;
  getOneUser: UserResponse;
  getPaginatedUser: PaginatedUsers;
  getMyProfile?: Maybe<ProfileResponse>;
  getUserProfile?: Maybe<ProfileResponse>;
  getAllNotification?: Maybe<Array<NotificationResponse>>;
  getOneNotification?: Maybe<NotificationResponse>;
  getPaginatedNotification?: Maybe<PaginatedNotificationResponse>;
  getAllRole: Array<RoleResponse>;
  getOneRole?: Maybe<RoleResponse>;
  getPaginatedRole?: Maybe<PaginatedRoleResponse>;
  getAvailablePermits: Array<AvailablePermitsResponse>;
  getAllUserArea?: Maybe<Array<UserAreaResponse>>;
  getOneUserArea?: Maybe<UserAreaResponse>;
  getPaginatedUserArea?: Maybe<PaginatedUserAreaResponse>;
  getAllUserPosition?: Maybe<Array<UserPositionResponse>>;
  getOneUserPosition?: Maybe<UserPositionResponse>;
  getPaginatedUserPosition?: Maybe<PaginatedUserPositionResponse>;
  myInfo?: Maybe<AuthUserResponse>;
  verifyToken: Scalars['Boolean'];
  getWriteSignedUrl: CloudFileIdResponse;
  getOneFiles?: Maybe<FilesResponse>;
  getPaginatedFiles?: Maybe<PaginatedFilesResponse>;
  getAllHeadquarters: Array<HeadquartersResponse>;
  getOneHeadquarters?: Maybe<HeadquartersResponse>;
  getPaginatedHeadquarters?: Maybe<PaginatedHeadquartersResponse>;
  getAllSetting: Array<SettingResponse>;
  getOneSetting?: Maybe<SettingResponse>;
  getPaginatedSetting?: Maybe<PaginatedSettingResponse>;
  getAllMembership: Array<MembershipResponse>;
  getOneMembership?: Maybe<MembershipResponse>;
  getPaginatedMembership?: Maybe<PaginatedMembershipResponse>;
  getAllDataParameterization: Array<DataParameterizationResponse>;
  getOneDataParameterization?: Maybe<DataParameterizationResponse>;
  getPaginatedDataParameterization?: Maybe<PaginatedDataParameterizationResponse>;
  getAllPatientDataSettings: Array<PatientDataSettingsResponse>;
  getOnePatientDataSettings?: Maybe<PatientDataSettingsResponse>;
  getPaginatedPatientDataSettings?: Maybe<PaginatedPatientDataSettingsResponse>;
  getAllMedicalSpecialties: Array<MedicalSpecialtiesResponse>;
  getOneMedicalSpecialties?: Maybe<MedicalSpecialtiesResponse>;
  getPaginatedMedicalSpecialties?: Maybe<PaginatedMedicalSpecialtiesResponse>;
  getAllDiagnosisType: Array<DiagnosisTypeResponse>;
  getOneDiagnosisType?: Maybe<DiagnosisTypeResponse>;
  getPaginatedDiagnosisType?: Maybe<PaginatedDiagnosisTypeResponse>;
  getAllDiagnosis: Array<DiagnosisResponse>;
  getOneDiagnosis?: Maybe<DiagnosisResponse>;
  getPaginatedDiagnosis?: Maybe<PaginatedDiagnosisResponse>;
  getAllProcedures: Array<ProceduresResponse>;
  getOneProcedures?: Maybe<ProceduresResponse>;
  getPaginatedProcedures?: Maybe<PaginatedProceduresResponse>;
  getAllIndicationsPatient: Array<IndicationsPatientResponse>;
  getOneIndicationsPatient?: Maybe<IndicationsPatientResponse>;
  getPaginatedIndicationsPatient?: Maybe<PaginatedIndicationsPatientResponse>;
  getAllHabeasData: Array<HabeasDataResponse>;
  getOneHabeasData?: Maybe<HabeasDataResponse>;
  getPaginatedHabeasData?: Maybe<PaginatedHabeasDataResponse>;
  getAllInformedConsent: Array<InformedConsentResponse>;
  getOneInformedConsent?: Maybe<InformedConsentResponse>;
  getPaginatedInformedConsent?: Maybe<PaginatedInformedConsentResponse>;
  getAllPatientSafetyCheck: Array<PatientSafetyCheckResponse>;
  getOnePatientSafetyCheck?: Maybe<PatientSafetyCheckResponse>;
  getPaginatedPatientSafetyCheck?: Maybe<PaginatedPatientSafetyCheckResponse>;
  getAllLaboratoryExams: Array<LaboratoryExamsResponse>;
  getOneLaboratoryExams?: Maybe<LaboratoryExamsResponse>;
  getPaginatedLaboratoryExams?: Maybe<PaginatedLaboratoryExamsResponse>;
  getAllMedicines: Array<MedicinesResponse>;
  getOneMedicines?: Maybe<MedicinesResponse>;
  getPaginatedMedicines?: Maybe<PaginatedMedicinesResponse>;
  getAllPathologies: Array<PathologiesResponse>;
  getOnePathologies?: Maybe<PathologiesResponse>;
  getPaginatedPathologies?: Maybe<PaginatedPathologiesResponse>;
};


export type QueryGetAllTenantArgs = {
  input: GetAllTenantsInput;
};


export type QueryGetOneTenantArgs = {
  input: GetOneTenantInput;
};


export type QueryGetAllSimplifiedTenantsInfoArgs = {
  input: GetAllTenantsInput;
};


export type QueryGetPaginatedTenantArgs = {
  input?: Maybe<GetPaginatedTenantInput>;
};


export type QueryGetAllUsersArgs = {
  input?: Maybe<GetAllUsersInput>;
};


export type QueryGetOneUserArgs = {
  input?: Maybe<GetOneUserInput>;
};


export type QueryGetPaginatedUserArgs = {
  input?: Maybe<GetPaginatedUsersInput>;
};


export type QueryGetUserProfileArgs = {
  userId: Scalars['ID'];
};


export type QueryGetAllNotificationArgs = {
  input?: Maybe<GetAllNotificationInput>;
};


export type QueryGetOneNotificationArgs = {
  input?: Maybe<GetOneNotificationInput>;
};


export type QueryGetPaginatedNotificationArgs = {
  input?: Maybe<GetPaginatedNotificationInput>;
};


export type QueryGetAllRoleArgs = {
  input?: Maybe<GetAllRoleInput>;
};


export type QueryGetOneRoleArgs = {
  input?: Maybe<GetOneRoleInput>;
};


export type QueryGetPaginatedRoleArgs = {
  input?: Maybe<GetPaginatedRoleInput>;
};


export type QueryGetAvailablePermitsArgs = {
  input?: Maybe<GetAllRoleInput>;
};


export type QueryGetAllUserAreaArgs = {
  input?: Maybe<GetAllUserAreaInput>;
};


export type QueryGetOneUserAreaArgs = {
  input?: Maybe<GetOneUserAreaInput>;
};


export type QueryGetPaginatedUserAreaArgs = {
  input?: Maybe<GetPaginatedUserAreaInput>;
};


export type QueryGetAllUserPositionArgs = {
  input?: Maybe<GetAllUserPositionInput>;
};


export type QueryGetOneUserPositionArgs = {
  input?: Maybe<GetOneUserPositionInput>;
};


export type QueryGetPaginatedUserPositionArgs = {
  input?: Maybe<GetPaginatedUserPositionInput>;
};


export type QueryGetWriteSignedUrlArgs = {
  input: GetUploadSignedUrlInput;
};


export type QueryGetOneFilesArgs = {
  input?: Maybe<GetOneFilesInput>;
};


export type QueryGetPaginatedFilesArgs = {
  input?: Maybe<GetPaginatedFilesInput>;
};


export type QueryGetAllHeadquartersArgs = {
  input?: Maybe<GetAllHeadquartersInput>;
};


export type QueryGetOneHeadquartersArgs = {
  input?: Maybe<GetOneHeadquartersInput>;
};


export type QueryGetPaginatedHeadquartersArgs = {
  input?: Maybe<GetPaginatedHeadquartersInput>;
};


export type QueryGetAllSettingArgs = {
  input?: Maybe<GetAllSettingInput>;
};


export type QueryGetOneSettingArgs = {
  input?: Maybe<GetOneSettingInput>;
};


export type QueryGetPaginatedSettingArgs = {
  input?: Maybe<GetPaginatedSettingInput>;
};


export type QueryGetAllMembershipArgs = {
  input?: Maybe<GetAllMembershipInput>;
};


export type QueryGetOneMembershipArgs = {
  input?: Maybe<GetOneMembershipInput>;
};


export type QueryGetPaginatedMembershipArgs = {
  input?: Maybe<GetPaginatedMembershipInput>;
};


export type QueryGetAllDataParameterizationArgs = {
  input?: Maybe<GetAllDataParameterizationInput>;
};


export type QueryGetOneDataParameterizationArgs = {
  input?: Maybe<GetOneDataParameterizationInput>;
};


export type QueryGetPaginatedDataParameterizationArgs = {
  input?: Maybe<GetPaginatedDataParameterizationInput>;
};


export type QueryGetAllPatientDataSettingsArgs = {
  input?: Maybe<GetAllPatientDataSettingsInput>;
};


export type QueryGetOnePatientDataSettingsArgs = {
  input?: Maybe<GetOnePatientDataSettingsInput>;
};


export type QueryGetPaginatedPatientDataSettingsArgs = {
  input?: Maybe<GetPaginatedPatientDataSettingsInput>;
};


export type QueryGetAllMedicalSpecialtiesArgs = {
  input?: Maybe<GetAllMedicalSpecialtiesInput>;
};


export type QueryGetOneMedicalSpecialtiesArgs = {
  input?: Maybe<GetOneMedicalSpecialtiesInput>;
};


export type QueryGetPaginatedMedicalSpecialtiesArgs = {
  input?: Maybe<GetPaginatedMedicalSpecialtiesInput>;
};


export type QueryGetAllDiagnosisTypeArgs = {
  input?: Maybe<GetAllDiagnosisTypeInput>;
};


export type QueryGetOneDiagnosisTypeArgs = {
  input?: Maybe<GetOneDiagnosisTypeInput>;
};


export type QueryGetPaginatedDiagnosisTypeArgs = {
  input?: Maybe<GetPaginatedDiagnosisTypeInput>;
};


export type QueryGetAllDiagnosisArgs = {
  input?: Maybe<GetAllDiagnosisInput>;
};


export type QueryGetOneDiagnosisArgs = {
  input?: Maybe<GetOneDiagnosisInput>;
};


export type QueryGetPaginatedDiagnosisArgs = {
  input?: Maybe<GetPaginatedDiagnosisInput>;
};


export type QueryGetAllProceduresArgs = {
  input?: Maybe<GetAllProceduresInput>;
};


export type QueryGetOneProceduresArgs = {
  input?: Maybe<GetOneProceduresInput>;
};


export type QueryGetPaginatedProceduresArgs = {
  input?: Maybe<GetPaginatedProceduresInput>;
};


export type QueryGetAllIndicationsPatientArgs = {
  input?: Maybe<GetAllIndicationsPatientInput>;
};


export type QueryGetOneIndicationsPatientArgs = {
  input?: Maybe<GetOneIndicationsPatientInput>;
};


export type QueryGetPaginatedIndicationsPatientArgs = {
  input?: Maybe<GetPaginatedIndicationsPatientInput>;
};


export type QueryGetAllHabeasDataArgs = {
  input?: Maybe<GetAllHabeasDataInput>;
};


export type QueryGetOneHabeasDataArgs = {
  input?: Maybe<GetOneHabeasDataInput>;
};


export type QueryGetPaginatedHabeasDataArgs = {
  input?: Maybe<GetPaginatedHabeasDataInput>;
};


export type QueryGetAllInformedConsentArgs = {
  input?: Maybe<GetAllInformedConsentInput>;
};


export type QueryGetOneInformedConsentArgs = {
  input?: Maybe<GetOneInformedConsentInput>;
};


export type QueryGetPaginatedInformedConsentArgs = {
  input?: Maybe<GetPaginatedInformedConsentInput>;
};


export type QueryGetAllPatientSafetyCheckArgs = {
  input?: Maybe<GetAllPatientSafetyCheckInput>;
};


export type QueryGetOnePatientSafetyCheckArgs = {
  input?: Maybe<GetOnePatientSafetyCheckInput>;
};


export type QueryGetPaginatedPatientSafetyCheckArgs = {
  input?: Maybe<GetPaginatedPatientSafetyCheckInput>;
};


export type QueryGetAllLaboratoryExamsArgs = {
  input?: Maybe<GetAllLaboratoryExamsInput>;
};


export type QueryGetOneLaboratoryExamsArgs = {
  input?: Maybe<GetOneLaboratoryExamsInput>;
};


export type QueryGetPaginatedLaboratoryExamsArgs = {
  input?: Maybe<GetPaginatedLaboratoryExamsInput>;
};


export type QueryGetAllMedicinesArgs = {
  input?: Maybe<GetAllMedicinesInput>;
};


export type QueryGetOneMedicinesArgs = {
  input?: Maybe<GetOneMedicinesInput>;
};


export type QueryGetPaginatedMedicinesArgs = {
  input?: Maybe<GetPaginatedMedicinesInput>;
};


export type QueryGetAllPathologiesArgs = {
  input?: Maybe<GetAllPathologiesInput>;
};


export type QueryGetOnePathologiesArgs = {
  input?: Maybe<GetOnePathologiesInput>;
};


export type QueryGetPaginatedPathologiesArgs = {
  input?: Maybe<GetPaginatedPathologiesInput>;
};

export type ResetPasswordInput = {
  password: Scalars['String'];
};

export type RoleFilterFilter = {
  and?: Maybe<Array<RoleFilterFilter>>;
  or?: Maybe<Array<RoleFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type RoleResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  permits: Array<PermitsResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SettingFilterFilter = {
  and?: Maybe<Array<SettingFilterFilter>>;
  or?: Maybe<Array<SettingFilterFilter>>;
  email?: Maybe<StringFieldComparison>;
  address?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type SettingResponse = {
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  logo?: Maybe<CloudFileResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SignInInput = {
  unique: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  provider?: Maybe<Provider>;
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  lastname: Scalars['String'];
  firstname: Scalars['String'];
  username: Scalars['String'];
};

export type SimplifiedTenantResponse = {
  id: Scalars['ID'];
  code: Scalars['String'];
  name: Scalars['String'];
};

export type SolvedEntityResponse = {
  id: Scalars['ID'];
  entityName?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<EntityFieldsResponse>>;
};

export type StringFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  notLike?: Maybe<Scalars['String']>;
  iLike?: Maybe<Scalars['String']>;
  notILike?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
};

export type Subscription = {
  onCreateNotification?: Maybe<NotificationResponse>;
};


export type SubscriptionOnCreateNotificationArgs = {
  toUser: Scalars['String'];
};

export enum TaxType {
  Monthly = 'MONTHLY',
  Bimonthly = 'BIMONTHLY',
  Quarterly = 'QUARTERLY',
  Biannual = 'BIANNUAL',
  Annual = 'ANNUAL'
}

export enum TenantCurrency {
  Usd = 'USD',
  Cop = 'COP',
  Eur = 'EUR'
}

export type TenantFilterFilter = {
  and?: Maybe<Array<TenantFilterFilter>>;
  or?: Maybe<Array<TenantFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  isActive?: Maybe<BooleanFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type TenantInfoInput = {
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  nit?: Maybe<Scalars['String']>;
  webSite?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  currency?: Maybe<TenantCurrency>;
  responsible?: Maybe<TenantResponsibleInput>;
  logoFile?: Maybe<Scalars['ID']>;
};

export type TenantInfoResponse = {
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  nit?: Maybe<Scalars['String']>;
  webSite?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  currency?: Maybe<TenantCurrency>;
  responsible?: Maybe<TenantResponsibleResponse>;
  logoFile?: Maybe<CloudFileResponse>;
};

export type TenantResponse = {
  id: Scalars['ID'];
  code: Scalars['String'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
  info?: Maybe<TenantInfoResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TenantResponsibleInput = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type TenantResponsibleResponse = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UpdateDataParameterizationInput = {
  entityId: Scalars['ID'];
  update: PartialDataParameterizationInput;
};

export type UpdateDiagnosisInput = {
  entityId: Scalars['ID'];
  update: PartialDiagnosisInput;
};

export type UpdateDiagnosisTypeInput = {
  entityId: Scalars['ID'];
  update: PartialDiagnosisTypeInput;
};

export type UpdateFilesInput = {
  entityId: Scalars['ID'];
  update: PartialFilesInput;
};

export type UpdateHabeasDataInput = {
  entityId: Scalars['ID'];
  update: PartialHabeasDataInput;
};

export type UpdateHeadquartersInput = {
  entityId: Scalars['ID'];
  update: PartialHeadquartersInput;
};

export type UpdateIndicationsPatientInput = {
  entityId: Scalars['ID'];
  update: PartialIndicationsPatientInput;
};

export type UpdateInformedConsentInput = {
  entityId: Scalars['ID'];
  update: PartialInformedConsentInput;
};

export type UpdateLaboratoryExamsInput = {
  entityId: Scalars['ID'];
  update: PartialLaboratoryExamsInput;
};

export type UpdateMeInput = {
  username?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatarFile?: Maybe<Scalars['ID']>;
  profile?: Maybe<PartialProfileInput>;
};

export type UpdateMedicalSpecialtiesInput = {
  entityId: Scalars['ID'];
  update: PartialMedicalSpecialtiesInput;
};

export type UpdateMedicinesInput = {
  entityId: Scalars['ID'];
  update: PartialMedicinesInput;
};

export type UpdateMembershipInput = {
  entityId: Scalars['ID'];
  update: PartialMembershipInput;
};

export type UpdateNotificationInput = {
  entityId: Scalars['ID'];
  update: PartialNotificationInput;
};

export type UpdatePathologiesInput = {
  entityId: Scalars['ID'];
  update: PartialPathologiesInput;
};

export type UpdatePatientDataSettingsInput = {
  entityId: Scalars['ID'];
  update: PartialPatientDataSettingsInput;
};

export type UpdatePatientSafetyCheckInput = {
  entityId: Scalars['ID'];
  update: PartialPatientSafetyCheckInput;
};

export type UpdateProceduresInput = {
  entityId: Scalars['ID'];
  update: PartialProceduresInput;
};

export type UpdateRoleInput = {
  entityId: Scalars['ID'];
  update: PartialRoleInput;
};

export type UpdateSettingInput = {
  entityId: Scalars['ID'];
  update: PartialSettingInput;
};

export type UpdateTenantInput = {
  entityId: Scalars['ID'];
  update: PartialTenantInput;
};

export type UpdateUserAreaInput = {
  entityId: Scalars['ID'];
  update: PartialUserAreaInput;
};

export type UpdateUserInput = {
  entityId: Scalars['ID'];
  update: PartialUserInput;
};

export type UpdateUserPositionInput = {
  entityId: Scalars['ID'];
  update: PartialUserPositionInput;
};

export type UserAreaFilterFilter = {
  and?: Maybe<Array<UserAreaFilterFilter>>;
  or?: Maybe<Array<UserAreaFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  isActive?: Maybe<BooleanFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UserAreaResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserFilterFilter = {
  and?: Maybe<Array<UserFilterFilter>>;
  or?: Maybe<Array<UserFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
  username?: Maybe<StringFieldComparison>;
  verified?: Maybe<StringFieldComparison>;
  firstname?: Maybe<StringFieldComparison>;
  lastLogin?: Maybe<DateFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  profile?: Maybe<GraphQlFilterFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export enum UserGender {
  Male = 'MALE',
  Female = 'FEMALE',
  TransGender = 'TRANS_GENDER',
  NotSpecified = 'NOT_SPECIFIED'
}

export type UserPositionFilterFilter = {
  and?: Maybe<Array<UserPositionFilterFilter>>;
  or?: Maybe<Array<UserPositionFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  isActive?: Maybe<BooleanFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UserPositionResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserResponse = {
  id: Scalars['ID'];
  email: Scalars['String'];
  username: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstname: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
  isActive?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  roles: Array<SolvedEntityResponse>;
  profile?: Maybe<ProfileResponse>;
  avatarFile?: Maybe<CloudFileResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

