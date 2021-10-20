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
  MedicalSpecialties = 'MEDICAL_SPECIALTIES',
  DataParameterization = 'DATA_PARAMETERIZATION',
  Patient = 'PATIENT',
  MedicalRecords = 'MEDICAL_RECORDS',
  QuickMedicalHistory = 'QUICK_MEDICAL_HISTORY',
  PharmacologicalManagement = 'PHARMACOLOGICAL_MANAGEMENT',
  QuickComprehensiveManagement = 'QUICK_COMPREHENSIVE_MANAGEMENT',
  QuickParaclinicsEvaluations = 'QUICK_PARACLINICS_EVALUATIONS',
  QuickPhysicalExam = 'QUICK_PHYSICAL_EXAM'
}

export enum AffiliateType {
  Quote = 'QUOTE',
  Beneficiary = 'BENEFICIARY',
  Additional = 'ADDITIONAL'
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

export type CreateFilesInput = {
  url: Scalars['String'];
  key: Scalars['String'];
  filename: Scalars['String'];
  bytes?: Maybe<Scalars['Float']>;
  storage: FileStorageType;
  status: FileStatus;
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

export type CreateMedicalRecordsInput = {
  quickMedicalHistory?: Maybe<Scalars['ID']>;
  patient?: Maybe<Scalars['ID']>;
  medicalRecordType?: Maybe<MedicalRecordType>;
  description: Scalars['String'];
};

export type CreateMedicalSpecialtiesInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreatePatientInput = {
  lastName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstSurName?: Maybe<Scalars['String']>;
  lastSurName?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  gender?: Maybe<UserGender>;
  documentType: DocumentType;
  documentNumber: Scalars['String'];
  placeOfBirth?: Maybe<Scalars['String']>;
  linkedType?: Maybe<LinkedType>;
  maritalStatus?: Maybe<MaritalStatus>;
  affiliateType?: Maybe<AffiliateType>;
  insuranceType?: Maybe<InsuranceType>;
  insuranceName?: Maybe<Scalars['String']>;
  homeAddress?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  municipality?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  officePhone?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type CreatePharmacologicalManagementInput = {
  quickMedicalHistory?: Maybe<Scalars['ID']>;
  patient?: Maybe<Scalars['ID']>;
  item: Scalars['Int'];
  description: Scalars['String'];
};

export type CreateQuickComprehensiveManagementInput = {
  quickMedicalHistory?: Maybe<Scalars['ID']>;
  patient?: Maybe<Scalars['ID']>;
  physicalTherapy: Scalars['String'];
  occupationalTherapy: Scalars['String'];
  nutrition: Scalars['String'];
  psychology: Scalars['String'];
  languageTherapy: Scalars['String'];
  respiratoryTherapy: Scalars['String'];
  socialWork: Scalars['String'];
  nursingAssistant: Scalars['String'];
};

export type CreateQuickMedicalHistoryInput = {
  patient?: Maybe<Scalars['ID']>;
  quickMedicalHistoryType?: Maybe<QuickMedicalHistoryType>;
  companionsName?: Maybe<Scalars['String']>;
  companionsPhoneNumber?: Maybe<Scalars['String']>;
  companionsType?: Maybe<Scalars['String']>;
  responsableName?: Maybe<Scalars['String']>;
  responsablePhoneNumber?: Maybe<Scalars['String']>;
  responsableOfficeNumber?: Maybe<Scalars['String']>;
  reasonForConsultation?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
  currentIllness?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CreateQuickParaclinicsEvaluationsInput = {
  quickMedicalHistory?: Maybe<Scalars['ID']>;
  patient?: Maybe<Scalars['ID']>;
  paraclinics?: Maybe<Scalars['String']>;
  evaluations?: Maybe<Scalars['String']>;
};

export type CreateQuickPhysicalExamInput = {
  quickMedicalHistory?: Maybe<Scalars['ID']>;
  patient?: Maybe<Scalars['ID']>;
  bloodPressure?: Maybe<Scalars['String']>;
  heartRate?: Maybe<Scalars['String']>;
  breathingFrequency?: Maybe<Scalars['String']>;
  oxygenSaturation?: Maybe<Scalars['String']>;
  temperature?: Maybe<Scalars['String']>;
  glucometry?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  clinicalAnalysis?: Maybe<Scalars['String']>;
  diagnosticImpression?: Maybe<Scalars['String']>;
};

export type CreateRoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  permits: Array<PermitsInput>;
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


export type DeleteFilesInput = {
  entityId: Scalars['ID'];
};

export type DeleteHeadquartersInput = {
  entityId: Scalars['ID'];
};

export type DeleteManyFilesInput = {
  where?: Maybe<FilesFilterFilter>;
};

export type DeleteManyHeadquartersInput = {
  where?: Maybe<HeadquartersFilterFilter>;
};

export type DeleteManyMedicalRecordsInput = {
  where?: Maybe<MedicalRecordsFilterFilter>;
};

export type DeleteManyMedicalSpecialtiesInput = {
  where?: Maybe<MedicalSpecialtiesFilterFilter>;
};

export type DeleteManyNotificationInput = {
  where?: Maybe<NotificationFilterFilter>;
};

export type DeleteManyPatientInput = {
  where?: Maybe<PatientFilterFilter>;
};

export type DeleteManyPharmacologicalManagementInput = {
  where?: Maybe<PharmacologicalManagementFilterFilter>;
};

export type DeleteManyQuickComprehensiveManagementInput = {
  where?: Maybe<QuickComprehensiveManagementFilterFilter>;
};

export type DeleteManyQuickMedicalHistoryInput = {
  where?: Maybe<QuickMedicalHistoryFilterFilter>;
};

export type DeleteManyQuickParaclinicsEvaluationsInput = {
  where?: Maybe<QuickParaclinicsEvaluationsFilterFilter>;
};

export type DeleteManyQuickPhysicalExamInput = {
  where?: Maybe<QuickPhysicalExamFilterFilter>;
};

export type DeleteManyRoleInput = {
  where?: Maybe<RoleFilterFilter>;
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

export type DeleteMedicalRecordsInput = {
  entityId: Scalars['ID'];
};

export type DeleteMedicalSpecialtiesInput = {
  entityId: Scalars['ID'];
};

export type DeleteNotificationInput = {
  entityId: Scalars['ID'];
};

export type DeletePatientInput = {
  entityId: Scalars['ID'];
};

export type DeletePharmacologicalManagementInput = {
  entityId: Scalars['ID'];
};

export type DeleteQuickComprehensiveManagementInput = {
  entityId: Scalars['ID'];
};

export type DeleteQuickMedicalHistoryInput = {
  entityId: Scalars['ID'];
};

export type DeleteQuickParaclinicsEvaluationsInput = {
  entityId: Scalars['ID'];
};

export type DeleteQuickPhysicalExamInput = {
  entityId: Scalars['ID'];
};

export type DeleteRoleInput = {
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

export enum DocumentType {
  IdentificationCard = 'IDENTIFICATION_CARD',
  ForeignerId = 'FOREIGNER_ID',
  Passport = 'PASSPORT'
}

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

export type GetAllHeadquartersInput = {
  where?: Maybe<HeadquartersFilterFilter>;
  orderBy?: Maybe<OrderByHeadquartersInput>;
};

export type GetAllMedicalRecordsInput = {
  where?: Maybe<MedicalRecordsFilterFilter>;
  orderBy?: Maybe<OrderByMedicalRecordsInput>;
};

export type GetAllMedicalSpecialtiesInput = {
  where?: Maybe<MedicalSpecialtiesFilterFilter>;
  orderBy?: Maybe<OrderByMedicalSpecialtiesInput>;
};

export type GetAllNotificationInput = {
  where?: Maybe<NotificationFilterFilter>;
  orderBy?: Maybe<OrderByNotificationInput>;
};

export type GetAllPatientInput = {
  where?: Maybe<PatientFilterFilter>;
  orderBy?: Maybe<OrderByPatientInput>;
};

export type GetAllPharmacologicalManagementInput = {
  where?: Maybe<PharmacologicalManagementFilterFilter>;
  orderBy?: Maybe<OrderByPharmacologicalManagementInput>;
};

export type GetAllQuickComprehensiveManagementInput = {
  where?: Maybe<QuickComprehensiveManagementFilterFilter>;
  orderBy?: Maybe<OrderByQuickComprehensiveManagementInput>;
};

export type GetAllQuickMedicalHistoryInput = {
  where?: Maybe<QuickMedicalHistoryFilterFilter>;
  orderBy?: Maybe<OrderByQuickMedicalHistoryInput>;
};

export type GetAllQuickParaclinicsEvaluationsInput = {
  where?: Maybe<QuickParaclinicsEvaluationsFilterFilter>;
  orderBy?: Maybe<OrderByQuickParaclinicsEvaluationsInput>;
};

export type GetAllQuickPhysicalExamInput = {
  where?: Maybe<QuickPhysicalExamFilterFilter>;
  orderBy?: Maybe<OrderByQuickPhysicalExamInput>;
};

export type GetAllRoleInput = {
  where?: Maybe<RoleFilterFilter>;
  orderBy?: Maybe<OrderByRoleInput>;
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

export type GetOneFilesInput = {
  where?: Maybe<FilesFilterFilter>;
};

export type GetOneHeadquartersInput = {
  where?: Maybe<HeadquartersFilterFilter>;
};

export type GetOneMedicalRecordsInput = {
  where?: Maybe<MedicalRecordsFilterFilter>;
};

export type GetOneMedicalSpecialtiesInput = {
  where?: Maybe<MedicalSpecialtiesFilterFilter>;
};

export type GetOneNotificationInput = {
  where?: Maybe<NotificationFilterFilter>;
};

export type GetOnePatientInput = {
  where?: Maybe<PatientFilterFilter>;
};

export type GetOnePharmacologicalManagementInput = {
  where?: Maybe<PharmacologicalManagementFilterFilter>;
};

export type GetOneQuickComprehensiveManagementInput = {
  where?: Maybe<QuickComprehensiveManagementFilterFilter>;
};

export type GetOneQuickMedicalHistoryInput = {
  where?: Maybe<QuickMedicalHistoryFilterFilter>;
};

export type GetOneQuickParaclinicsEvaluationsInput = {
  where?: Maybe<QuickParaclinicsEvaluationsFilterFilter>;
};

export type GetOneQuickPhysicalExamInput = {
  where?: Maybe<QuickPhysicalExamFilterFilter>;
};

export type GetOneRoleInput = {
  where?: Maybe<RoleFilterFilter>;
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

export type GetPaginatedFilesInput = {
  paginator: PaginatorParams;
  where?: Maybe<FilesFilterFilter>;
  orderBy?: Maybe<OrderByFilesInput>;
};

export type GetPaginatedHeadquartersInput = {
  paginator: PaginatorParams;
  where?: Maybe<HeadquartersFilterFilter>;
  orderBy?: Maybe<OrderByHeadquartersInput>;
};

export type GetPaginatedMedicalRecordsInput = {
  paginator: PaginatorParams;
  where?: Maybe<MedicalRecordsFilterFilter>;
  orderBy?: Maybe<OrderByMedicalRecordsInput>;
};

export type GetPaginatedMedicalSpecialtiesInput = {
  paginator: PaginatorParams;
  where?: Maybe<MedicalSpecialtiesFilterFilter>;
  orderBy?: Maybe<OrderByMedicalSpecialtiesInput>;
};

export type GetPaginatedNotificationInput = {
  paginator: PaginatorParams;
  where?: Maybe<NotificationFilterFilter>;
  orderBy?: Maybe<OrderByNotificationInput>;
};

export type GetPaginatedPatientInput = {
  paginator: PaginatorParams;
  where?: Maybe<PatientFilterFilter>;
  orderBy?: Maybe<OrderByPatientInput>;
};

export type GetPaginatedPharmacologicalManagementInput = {
  paginator: PaginatorParams;
  where?: Maybe<PharmacologicalManagementFilterFilter>;
  orderBy?: Maybe<OrderByPharmacologicalManagementInput>;
};

export type GetPaginatedQuickComprehensiveManagementInput = {
  paginator: PaginatorParams;
  where?: Maybe<QuickComprehensiveManagementFilterFilter>;
  orderBy?: Maybe<OrderByQuickComprehensiveManagementInput>;
};

export type GetPaginatedQuickMedicalHistoryInput = {
  paginator: PaginatorParams;
  where?: Maybe<QuickMedicalHistoryFilterFilter>;
  orderBy?: Maybe<OrderByQuickMedicalHistoryInput>;
};

export type GetPaginatedQuickParaclinicsEvaluationsInput = {
  paginator: PaginatorParams;
  where?: Maybe<QuickParaclinicsEvaluationsFilterFilter>;
  orderBy?: Maybe<OrderByQuickParaclinicsEvaluationsInput>;
};

export type GetPaginatedQuickPhysicalExamInput = {
  paginator: PaginatorParams;
  where?: Maybe<QuickPhysicalExamFilterFilter>;
  orderBy?: Maybe<OrderByQuickPhysicalExamInput>;
};

export type GetPaginatedRoleInput = {
  paginator: PaginatorParams;
  where?: Maybe<RoleFilterFilter>;
  orderBy?: Maybe<OrderByRoleInput>;
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

export enum InsuranceType {
  Ars = 'ARS',
  Eps = 'EPS',
  Ips = 'IPS',
  Arl = 'ARL'
}

export type JwtAuthenticatedResponse = {
  user: AuthUserResponse;
  roles: Array<AuthRoleResponse>;
  providerData: AuthProviderDataResponse;
  access_token: Scalars['String'];
};

export enum LinkedType {
  Subsidized = 'SUBSIDIZED',
  Linked = 'LINKED',
  Contributory = 'CONTRIBUTORY'
}

export enum MaritalStatus {
  Single = 'SINGLE',
  Married = 'MARRIED',
  FreeUnion = 'FREE_UNION',
  Widower = 'WIDOWER'
}

export enum MedicalRecordType {
  Pathological = 'PATHOLOGICAL',
  Surgical = 'SURGICAL',
  Pharmacological = 'PHARMACOLOGICAL',
  AllergicToxic = 'ALLERGIC_TOXIC',
  Traumatic = 'TRAUMATIC',
  Family = 'FAMILY',
  Transfusionals = 'TRANSFUSIONALS',
  Gynecological = 'GYNECOLOGICAL',
  Expositional = 'EXPOSITIONAL',
  Others = 'OTHERS'
}

export type MedicalRecordsFilterFilter = {
  and?: Maybe<Array<MedicalRecordsFilterFilter>>;
  or?: Maybe<Array<MedicalRecordsFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type MedicalRecordsResponse = {
  id: Scalars['ID'];
  quickMedicalHistory?: Maybe<SolvedEntityResponse>;
  patient?: Maybe<SolvedEntityResponse>;
  medicalRecordType?: Maybe<MedicalRecordType>;
  description?: Maybe<Scalars['String']>;
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
  createMedicalSpecialties?: Maybe<Scalars['Void']>;
  updateMedicalSpecialties?: Maybe<Scalars['Void']>;
  deleteMedicalSpecialties?: Maybe<Scalars['Void']>;
  deleteManyMedicalSpecialties?: Maybe<Scalars['Void']>;
  createPatient?: Maybe<Scalars['Void']>;
  updatePatient?: Maybe<Scalars['Void']>;
  deletePatient?: Maybe<Scalars['Void']>;
  deleteManyPatient?: Maybe<Scalars['Void']>;
  createQuickMedicalHistory?: Maybe<Scalars['Void']>;
  updateQuickMedicalHistory?: Maybe<Scalars['Void']>;
  deleteQuickMedicalHistory?: Maybe<Scalars['Void']>;
  deleteManyQuickMedicalHistory?: Maybe<Scalars['Void']>;
  createMedicalRecords?: Maybe<Scalars['Void']>;
  updateMedicalRecords?: Maybe<Scalars['Void']>;
  deleteMedicalRecords?: Maybe<Scalars['Void']>;
  deleteManyMedicalRecords?: Maybe<Scalars['Void']>;
  createQuickPhysicalExam?: Maybe<Scalars['Void']>;
  updateQuickPhysicalExam?: Maybe<Scalars['Void']>;
  deleteQuickPhysicalExam?: Maybe<Scalars['Void']>;
  deleteManyQuickPhysicalExam?: Maybe<Scalars['Void']>;
  createPharmacologicalManagement?: Maybe<Scalars['Void']>;
  updatePharmacologicalManagement?: Maybe<Scalars['Void']>;
  deletePharmacologicalManagement?: Maybe<Scalars['Void']>;
  deleteManyPharmacologicalManagement?: Maybe<Scalars['Void']>;
  createQuickComprehensiveManagement?: Maybe<Scalars['Void']>;
  updateQuickComprehensiveManagement?: Maybe<Scalars['Void']>;
  deleteQuickComprehensiveManagement?: Maybe<Scalars['Void']>;
  deleteManyQuickComprehensiveManagement?: Maybe<Scalars['Void']>;
  createQuickParaclinicsEvaluations?: Maybe<Scalars['Void']>;
  updateQuickParaclinicsEvaluations?: Maybe<Scalars['Void']>;
  deleteQuickParaclinicsEvaluations?: Maybe<Scalars['Void']>;
  deleteManyQuickParaclinicsEvaluations?: Maybe<Scalars['Void']>;
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


export type MutationCreatePatientArgs = {
  input: CreatePatientInput;
};


export type MutationUpdatePatientArgs = {
  input: UpdatePatientInput;
};


export type MutationDeletePatientArgs = {
  input: DeletePatientInput;
};


export type MutationDeleteManyPatientArgs = {
  input: DeleteManyPatientInput;
};


export type MutationCreateQuickMedicalHistoryArgs = {
  input: CreateQuickMedicalHistoryInput;
};


export type MutationUpdateQuickMedicalHistoryArgs = {
  input: UpdateQuickMedicalHistoryInput;
};


export type MutationDeleteQuickMedicalHistoryArgs = {
  input: DeleteQuickMedicalHistoryInput;
};


export type MutationDeleteManyQuickMedicalHistoryArgs = {
  input: DeleteManyQuickMedicalHistoryInput;
};


export type MutationCreateMedicalRecordsArgs = {
  input: CreateMedicalRecordsInput;
};


export type MutationUpdateMedicalRecordsArgs = {
  input: UpdateMedicalRecordsInput;
};


export type MutationDeleteMedicalRecordsArgs = {
  input: DeleteMedicalRecordsInput;
};


export type MutationDeleteManyMedicalRecordsArgs = {
  input: DeleteManyMedicalRecordsInput;
};


export type MutationCreateQuickPhysicalExamArgs = {
  input: CreateQuickPhysicalExamInput;
};


export type MutationUpdateQuickPhysicalExamArgs = {
  input: UpdateQuickPhysicalExamInput;
};


export type MutationDeleteQuickPhysicalExamArgs = {
  input: DeleteQuickPhysicalExamInput;
};


export type MutationDeleteManyQuickPhysicalExamArgs = {
  input: DeleteManyQuickPhysicalExamInput;
};


export type MutationCreatePharmacologicalManagementArgs = {
  input: CreatePharmacologicalManagementInput;
};


export type MutationUpdatePharmacologicalManagementArgs = {
  input: UpdatePharmacologicalManagementInput;
};


export type MutationDeletePharmacologicalManagementArgs = {
  input: DeletePharmacologicalManagementInput;
};


export type MutationDeleteManyPharmacologicalManagementArgs = {
  input: DeleteManyPharmacologicalManagementInput;
};


export type MutationCreateQuickComprehensiveManagementArgs = {
  input: CreateQuickComprehensiveManagementInput;
};


export type MutationUpdateQuickComprehensiveManagementArgs = {
  input: UpdateQuickComprehensiveManagementInput;
};


export type MutationDeleteQuickComprehensiveManagementArgs = {
  input: DeleteQuickComprehensiveManagementInput;
};


export type MutationDeleteManyQuickComprehensiveManagementArgs = {
  input: DeleteManyQuickComprehensiveManagementInput;
};


export type MutationCreateQuickParaclinicsEvaluationsArgs = {
  input: CreateQuickParaclinicsEvaluationsInput;
};


export type MutationUpdateQuickParaclinicsEvaluationsArgs = {
  input: UpdateQuickParaclinicsEvaluationsInput;
};


export type MutationDeleteQuickParaclinicsEvaluationsArgs = {
  input: DeleteQuickParaclinicsEvaluationsInput;
};


export type MutationDeleteManyQuickParaclinicsEvaluationsArgs = {
  input: DeleteManyQuickParaclinicsEvaluationsInput;
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

export type OrderByFilesInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByHeadquartersInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByMedicalRecordsInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByMedicalSpecialtiesInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByNotificationInput = {
  type?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByPatientInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByPharmacologicalManagementInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByQuickComprehensiveManagementInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByQuickMedicalHistoryInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByQuickParaclinicsEvaluationsInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByQuickPhysicalExamInput = {
  bloodPressure?: Maybe<OrderByType>;
  heartRate?: Maybe<OrderByType>;
  breathingFrequency?: Maybe<OrderByType>;
  oxygenSaturation?: Maybe<OrderByType>;
  temperature?: Maybe<OrderByType>;
  glucometry?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  clinicalAnalysis?: Maybe<OrderByType>;
  diagnosticImpression?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByRoleInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
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

export type PaginatedFilesResponse = {
  items: Array<FilesResponse>;
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

export type PaginatedMedicalRecordsResponse = {
  items: Array<MedicalRecordsResponse>;
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

export type PaginatedNotificationResponse = {
  items: Array<NotificationResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedPatientResponse = {
  items: Array<PatientResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedPharmacologicalManagementResponse = {
  items: Array<PharmacologicalManagementResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedQuickComprehensiveManagementResponse = {
  items: Array<QuickComprehensiveManagementResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedQuickMedicalHistoryResponse = {
  items: Array<QuickMedicalHistoryResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedQuickParaclinicsEvaluationsResponse = {
  items: Array<QuickParaclinicsEvaluationsResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedQuickPhysicalExamResponse = {
  items: Array<QuickPhysicalExamResponse>;
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

export type PartialFilesInput = {
  url?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  bytes?: Maybe<Scalars['Float']>;
  storage?: Maybe<FileStorageType>;
  status?: Maybe<FileStatus>;
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

export type PartialMedicalRecordsInput = {
  quickMedicalHistory?: Maybe<Scalars['ID']>;
  patient?: Maybe<Scalars['ID']>;
  medicalRecordType?: Maybe<MedicalRecordType>;
  description?: Maybe<Scalars['String']>;
};

export type PartialMedicalSpecialtiesInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialNotificationInput = {
  isRead?: Maybe<Scalars['Boolean']>;
};

export type PartialPatientInput = {
  lastName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstSurName?: Maybe<Scalars['String']>;
  lastSurName?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  gender?: Maybe<UserGender>;
  documentType?: Maybe<DocumentType>;
  documentNumber?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  linkedType?: Maybe<LinkedType>;
  maritalStatus?: Maybe<MaritalStatus>;
  affiliateType?: Maybe<AffiliateType>;
  insuranceType?: Maybe<InsuranceType>;
  insuranceName?: Maybe<Scalars['String']>;
  homeAddress?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  municipality?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  officePhone?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type PartialPermitsInput = {
  module?: Maybe<App_Modules>;
  action?: Maybe<Action_List>;
};

export type PartialPharmacologicalManagementInput = {
  quickMedicalHistory?: Maybe<Scalars['ID']>;
  patient?: Maybe<Scalars['ID']>;
  item?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
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

export type PartialQuickComprehensiveManagementInput = {
  quickMedicalHistory?: Maybe<Scalars['ID']>;
  patient?: Maybe<Scalars['ID']>;
  physicalTherapy?: Maybe<Scalars['String']>;
  occupationalTherapy?: Maybe<Scalars['String']>;
  nutrition?: Maybe<Scalars['String']>;
  psychology?: Maybe<Scalars['String']>;
  languageTherapy?: Maybe<Scalars['String']>;
  respiratoryTherapy?: Maybe<Scalars['String']>;
  socialWork?: Maybe<Scalars['String']>;
  nursingAssistant?: Maybe<Scalars['String']>;
};

export type PartialQuickMedicalHistoryInput = {
  patient?: Maybe<Scalars['ID']>;
  quickMedicalHistoryType?: Maybe<QuickMedicalHistoryType>;
  companionsName?: Maybe<Scalars['String']>;
  companionsPhoneNumber?: Maybe<Scalars['String']>;
  companionsType?: Maybe<Scalars['String']>;
  responsableName?: Maybe<Scalars['String']>;
  responsablePhoneNumber?: Maybe<Scalars['String']>;
  responsableOfficeNumber?: Maybe<Scalars['String']>;
  reasonForConsultation?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
  currentIllness?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PartialQuickParaclinicsEvaluationsInput = {
  quickMedicalHistory?: Maybe<Scalars['ID']>;
  patient?: Maybe<Scalars['ID']>;
  paraclinics?: Maybe<Scalars['String']>;
  evaluations?: Maybe<Scalars['String']>;
};

export type PartialQuickPhysicalExamInput = {
  quickMedicalHistory?: Maybe<Scalars['ID']>;
  patient?: Maybe<Scalars['ID']>;
  bloodPressure?: Maybe<Scalars['String']>;
  heartRate?: Maybe<Scalars['String']>;
  breathingFrequency?: Maybe<Scalars['String']>;
  oxygenSaturation?: Maybe<Scalars['String']>;
  temperature?: Maybe<Scalars['String']>;
  glucometry?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  clinicalAnalysis?: Maybe<Scalars['String']>;
  diagnosticImpression?: Maybe<Scalars['String']>;
};

export type PartialRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  permits?: Maybe<Array<PartialPermitsInput>>;
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

export type PatientFilterFilter = {
  and?: Maybe<Array<PatientFilterFilter>>;
  or?: Maybe<Array<PatientFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  lastName?: Maybe<StringFieldComparison>;
  firstName?: Maybe<StringFieldComparison>;
  firstSurName?: Maybe<StringFieldComparison>;
  lastSurName?: Maybe<StringFieldComparison>;
  documentNumber?: Maybe<StringFieldComparison>;
  insuranceName?: Maybe<StringFieldComparison>;
  placeOfBirth?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type PatientResponse = {
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstSurName?: Maybe<Scalars['String']>;
  lastSurName?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  gender?: Maybe<UserGender>;
  documentType?: Maybe<DocumentType>;
  documentNumber?: Maybe<Scalars['String']>;
  maritalStatus?: Maybe<MaritalStatus>;
  insuranceType?: Maybe<InsuranceType>;
  affiliateType?: Maybe<AffiliateType>;
  linkedType?: Maybe<LinkedType>;
  homeAddress?: Maybe<Scalars['String']>;
  insuranceName?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  municipality?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  officePhone?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
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

export type PharmacologicalManagementFilterFilter = {
  and?: Maybe<Array<PharmacologicalManagementFilterFilter>>;
  or?: Maybe<Array<PharmacologicalManagementFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type PharmacologicalManagementResponse = {
  id: Scalars['ID'];
  quickMedicalHistory?: Maybe<SolvedEntityResponse>;
  patient?: Maybe<SolvedEntityResponse>;
  item: Scalars['Int'];
  description: Scalars['String'];
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
  getAllMedicalSpecialties: Array<MedicalSpecialtiesResponse>;
  getOneMedicalSpecialties?: Maybe<MedicalSpecialtiesResponse>;
  getPaginatedMedicalSpecialties?: Maybe<PaginatedMedicalSpecialtiesResponse>;
  getAllPatient: Array<PatientResponse>;
  getOnePatient?: Maybe<PatientResponse>;
  getPaginatedPatient?: Maybe<PaginatedPatientResponse>;
  getAllQuickMedicalHistory: Array<QuickMedicalHistoryResponse>;
  getOneQuickMedicalHistory?: Maybe<QuickMedicalHistoryResponse>;
  getPaginatedQuickMedicalHistory?: Maybe<PaginatedQuickMedicalHistoryResponse>;
  getAllMedicalRecords: Array<MedicalRecordsResponse>;
  getOneMedicalRecords?: Maybe<MedicalRecordsResponse>;
  getPaginatedMedicalRecords?: Maybe<PaginatedMedicalRecordsResponse>;
  getAllQuickPhysicalExam: Array<QuickPhysicalExamResponse>;
  getOneQuickPhysicalExam?: Maybe<QuickPhysicalExamResponse>;
  getPaginatedQuickPhysicalExam?: Maybe<PaginatedQuickPhysicalExamResponse>;
  getAllPharmacologicalManagement: Array<PharmacologicalManagementResponse>;
  getOnePharmacologicalManagement?: Maybe<PharmacologicalManagementResponse>;
  getPaginatedPharmacologicalManagement?: Maybe<PaginatedPharmacologicalManagementResponse>;
  getAllQuickComprehensiveManagement: Array<QuickComprehensiveManagementResponse>;
  getOneQuickComprehensiveManagement?: Maybe<QuickComprehensiveManagementResponse>;
  getPaginatedQuickComprehensiveManagement?: Maybe<PaginatedQuickComprehensiveManagementResponse>;
  getAllQuickParaclinicsEvaluations: Array<QuickParaclinicsEvaluationsResponse>;
  getOneQuickParaclinicsEvaluations?: Maybe<QuickParaclinicsEvaluationsResponse>;
  getPaginatedQuickParaclinicsEvaluations?: Maybe<PaginatedQuickParaclinicsEvaluationsResponse>;
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


export type QueryGetAllMedicalSpecialtiesArgs = {
  input?: Maybe<GetAllMedicalSpecialtiesInput>;
};


export type QueryGetOneMedicalSpecialtiesArgs = {
  input?: Maybe<GetOneMedicalSpecialtiesInput>;
};


export type QueryGetPaginatedMedicalSpecialtiesArgs = {
  input?: Maybe<GetPaginatedMedicalSpecialtiesInput>;
};


export type QueryGetAllPatientArgs = {
  input?: Maybe<GetAllPatientInput>;
};


export type QueryGetOnePatientArgs = {
  input?: Maybe<GetOnePatientInput>;
};


export type QueryGetPaginatedPatientArgs = {
  input?: Maybe<GetPaginatedPatientInput>;
};


export type QueryGetAllQuickMedicalHistoryArgs = {
  input?: Maybe<GetAllQuickMedicalHistoryInput>;
};


export type QueryGetOneQuickMedicalHistoryArgs = {
  input?: Maybe<GetOneQuickMedicalHistoryInput>;
};


export type QueryGetPaginatedQuickMedicalHistoryArgs = {
  input?: Maybe<GetPaginatedQuickMedicalHistoryInput>;
};


export type QueryGetAllMedicalRecordsArgs = {
  input?: Maybe<GetAllMedicalRecordsInput>;
};


export type QueryGetOneMedicalRecordsArgs = {
  input?: Maybe<GetOneMedicalRecordsInput>;
};


export type QueryGetPaginatedMedicalRecordsArgs = {
  input?: Maybe<GetPaginatedMedicalRecordsInput>;
};


export type QueryGetAllQuickPhysicalExamArgs = {
  input?: Maybe<GetAllQuickPhysicalExamInput>;
};


export type QueryGetOneQuickPhysicalExamArgs = {
  input?: Maybe<GetOneQuickPhysicalExamInput>;
};


export type QueryGetPaginatedQuickPhysicalExamArgs = {
  input?: Maybe<GetPaginatedQuickPhysicalExamInput>;
};


export type QueryGetAllPharmacologicalManagementArgs = {
  input?: Maybe<GetAllPharmacologicalManagementInput>;
};


export type QueryGetOnePharmacologicalManagementArgs = {
  input?: Maybe<GetOnePharmacologicalManagementInput>;
};


export type QueryGetPaginatedPharmacologicalManagementArgs = {
  input?: Maybe<GetPaginatedPharmacologicalManagementInput>;
};


export type QueryGetAllQuickComprehensiveManagementArgs = {
  input?: Maybe<GetAllQuickComprehensiveManagementInput>;
};


export type QueryGetOneQuickComprehensiveManagementArgs = {
  input?: Maybe<GetOneQuickComprehensiveManagementInput>;
};


export type QueryGetPaginatedQuickComprehensiveManagementArgs = {
  input?: Maybe<GetPaginatedQuickComprehensiveManagementInput>;
};


export type QueryGetAllQuickParaclinicsEvaluationsArgs = {
  input?: Maybe<GetAllQuickParaclinicsEvaluationsInput>;
};


export type QueryGetOneQuickParaclinicsEvaluationsArgs = {
  input?: Maybe<GetOneQuickParaclinicsEvaluationsInput>;
};


export type QueryGetPaginatedQuickParaclinicsEvaluationsArgs = {
  input?: Maybe<GetPaginatedQuickParaclinicsEvaluationsInput>;
};

export type QuickComprehensiveManagementFilterFilter = {
  and?: Maybe<Array<QuickComprehensiveManagementFilterFilter>>;
  or?: Maybe<Array<QuickComprehensiveManagementFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type QuickComprehensiveManagementResponse = {
  id: Scalars['ID'];
  quickMedicalHistory?: Maybe<SolvedEntityResponse>;
  patient?: Maybe<SolvedEntityResponse>;
  physicalTherapy?: Maybe<Scalars['String']>;
  occupationalTherapy?: Maybe<Scalars['String']>;
  nutrition?: Maybe<Scalars['String']>;
  psychology?: Maybe<Scalars['String']>;
  languageTherapy?: Maybe<Scalars['String']>;
  respiratoryTherapy?: Maybe<Scalars['String']>;
  socialWork?: Maybe<Scalars['String']>;
  nursingAssistant?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuickMedicalHistoryFilterFilter = {
  and?: Maybe<Array<QuickMedicalHistoryFilterFilter>>;
  or?: Maybe<Array<QuickMedicalHistoryFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type QuickMedicalHistoryResponse = {
  id: Scalars['ID'];
  patient?: Maybe<SolvedEntityResponse>;
  quickMedicalHistoryType?: Maybe<QuickMedicalHistoryType>;
  companionsName?: Maybe<Scalars['String']>;
  companionsPhoneNumber?: Maybe<Scalars['String']>;
  companionsType?: Maybe<Scalars['String']>;
  responsableName?: Maybe<Scalars['String']>;
  responsablePhoneNumber?: Maybe<Scalars['String']>;
  responsableOfficeNumber?: Maybe<Scalars['String']>;
  reasonForConsultation?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
  currentIllness?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum QuickMedicalHistoryType {
  AcuteHospitalExtension = 'ACUTE_HOSPITAL_EXTENSION',
  AcuteHealthAtHome = 'ACUTE_HEALTH_AT_HOME',
  ChronicWithoutNursing = 'CHRONIC_WITHOUT_NURSING',
  ChronicWithNursing = 'CHRONIC_WITH_NURSING'
}

export type QuickParaclinicsEvaluationsFilterFilter = {
  and?: Maybe<Array<QuickParaclinicsEvaluationsFilterFilter>>;
  or?: Maybe<Array<QuickParaclinicsEvaluationsFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type QuickParaclinicsEvaluationsResponse = {
  id: Scalars['ID'];
  quickMedicalHistory?: Maybe<SolvedEntityResponse>;
  patient?: Maybe<SolvedEntityResponse>;
  paraclinics?: Maybe<Scalars['String']>;
  evaluations?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuickPhysicalExamFilterFilter = {
  and?: Maybe<Array<QuickPhysicalExamFilterFilter>>;
  or?: Maybe<Array<QuickPhysicalExamFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  bloodPressure?: Maybe<StringFieldComparison>;
  heartRate?: Maybe<StringFieldComparison>;
  breathingFrequency?: Maybe<StringFieldComparison>;
  oxygenSaturation?: Maybe<StringFieldComparison>;
  temperature?: Maybe<StringFieldComparison>;
  glucometry?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  clinicalAnalysis?: Maybe<StringFieldComparison>;
  diagnosticImpression?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type QuickPhysicalExamResponse = {
  id: Scalars['ID'];
  quickMedicalHistory?: Maybe<SolvedEntityResponse>;
  patient?: Maybe<SolvedEntityResponse>;
  bloodPressure?: Maybe<Scalars['String']>;
  heartRate?: Maybe<Scalars['String']>;
  breathingFrequency?: Maybe<Scalars['String']>;
  oxygenSaturation?: Maybe<Scalars['String']>;
  temperature?: Maybe<Scalars['String']>;
  glucometry?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  clinicalAnalysis?: Maybe<Scalars['String']>;
  diagnosticImpression?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type UpdateFilesInput = {
  entityId: Scalars['ID'];
  update: PartialFilesInput;
};

export type UpdateHeadquartersInput = {
  entityId: Scalars['ID'];
  update: PartialHeadquartersInput;
};

export type UpdateMeInput = {
  username?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatarFile?: Maybe<Scalars['ID']>;
  profile?: Maybe<PartialProfileInput>;
};

export type UpdateMedicalRecordsInput = {
  entityId: Scalars['ID'];
  update: PartialMedicalRecordsInput;
};

export type UpdateMedicalSpecialtiesInput = {
  entityId: Scalars['ID'];
  update: PartialMedicalSpecialtiesInput;
};

export type UpdateNotificationInput = {
  entityId: Scalars['ID'];
  update: PartialNotificationInput;
};

export type UpdatePatientInput = {
  entityId: Scalars['ID'];
  update: PartialPatientInput;
};

export type UpdatePharmacologicalManagementInput = {
  entityId: Scalars['ID'];
  update: PartialPharmacologicalManagementInput;
};

export type UpdateQuickComprehensiveManagementInput = {
  entityId: Scalars['ID'];
  update: PartialQuickComprehensiveManagementInput;
};

export type UpdateQuickMedicalHistoryInput = {
  entityId: Scalars['ID'];
  update: PartialQuickMedicalHistoryInput;
};

export type UpdateQuickParaclinicsEvaluationsInput = {
  entityId: Scalars['ID'];
  update: PartialQuickParaclinicsEvaluationsInput;
};

export type UpdateQuickPhysicalExamInput = {
  entityId: Scalars['ID'];
  update: PartialQuickPhysicalExamInput;
};

export type UpdateRoleInput = {
  entityId: Scalars['ID'];
  update: PartialRoleInput;
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

