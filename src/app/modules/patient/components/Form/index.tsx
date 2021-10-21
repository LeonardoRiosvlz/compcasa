import React from 'react';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { AffiliateType, InsuranceType, LinkedType, MaritalStatus, UserGender ,DocumentType } from 'api/graphql/schema/types';
import EnumSelector from 'app/modules/common/components/EnumSelector';
import moment from 'moment';

export type PatientFormField = {
    lastName: string;
    firstName: string;
    lastSurName: string;
    firstSurName: string;
    dateOfBirth: string;
    gender:UserGender;
    documentType: DocumentType;
    documentNumber: string;
    placeOfBirth?: string;
    linkedType?: LinkedType;
    affiliateType?: AffiliateType;
    insuranceType?: InsuranceType;
    insuranceName?: string;
    maritalStatus?: MaritalStatus;
    homeAddress?: string;
    neighborhood?: string;
    municipality?: string;
    homePhone?: string;
    officePhone?: string;
    occupation?: string;
    email: string;
}



type SelectorData = {
    //taxes: Array<Tax>
    //processCategories: Array<ProcessCategory>
}

type PatientFormFiles = {
    //resolutionFile?: CloudFile,
    //programFile?: CloudFile
}

type Props = {
    submitAction: (data: PatientFormField) => unknown
    formId: string
    initialData?: PatientFormField
    initialFiles?: PatientFormFiles,
    upLoading?: () => void,
}
const PatientForm: React.FC<Props> = ({submitAction, initialFiles, upLoading, formId, initialData}: Props) => {

    const {t} = useTranslation(['patient', 'common']);
    //	const { processFile } = useFile();
    const schema = yup.object().shape({
        firstName: yup.string().required(t('common:NAME_REQUIRED')),
    });

    const defaultValues: PatientFormField | {} = initialData ? {
        ...initialData
    } : {
        
    };

    const {handleSubmit, control, formState: {errors, dirtyFields, isValid}} = useForm<PatientFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
        defaultValues

    });


    //const [files, setFiles] = React.useState<{ [K in keyof PatientFormFiles]?: File }>({});

    /*const [selectorData, setSelectorData] = React.useState<SelectorData>({taxes: [], processCategories: []})

    const taxRepo = useRepository(TaxRepository)
    const processCategoryRepo = useRepository(ProcessCategoryRepository)


    const loadSelectorData = async () => {

        try {
            const taxes = await taxRepo.findAll({input: {where: {}}})
            const processCategories = await processCategoryRepo.findAll({input: {where: {}}})
            setSelectorData({taxes, processCategories})
        } catch (err) {
            toast.error(err?.toString())
        }
    }

    React.useEffect(() => {
        loadSelectorData().then()
    }, [])*/


    const onSubmit = (data: PatientFormField) => {

        /*let resolutionFile;
      if (isValid && files.resolutionFile) {
    if (upLoading) {
        upLoading();
    }
    const fileParam = 'resolutionFile';
    const toRemove = initialFiles?.resolutionFile?.id;
    const uploadResult = await processFile({ file: files.resolutionFile, fileParam, toRemove });
    resolutionFile = uploadResult?.[fileParam];
}*/

        submitAction(data);
    };

    return (<form id={formId}
                  className='w-full flex flex-col p-2'
                  onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>

            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="firstName"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('FIRST_NAME')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.firstSurName}
                            helperText={errors?.firstSurName?.message}
                            required
                        />)}/>
            </Grid>

            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="lastName"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('LAST_NAME')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.lastName}
                            helperText={errors?.lastName?.message}
                            required
                        />)}/>
            </Grid>

             <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="firstSurName"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('FIRST_SUR_NAME')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.firstSurName}
                            helperText={errors?.firstSurName?.message}
                            required
                        />)}/>
            </Grid>    

            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="lastSurName"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('LAST_SUR_NAME')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.lastSurName}
                            helperText={errors?.lastSurName?.message}
                            required
                        />)}/>
            </Grid>   

            <Grid item xs={12} md={6} className='w-full p-16'>

                <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => (
                    <TextField
                    {...field}
                    size='small'
                    value={moment(field.value).format('YYYY-MM-DD')}
                    label={t('DATE_OF_BIRTH')}
                    autoFocus
                    variant="outlined"
                    fullWidth
                        type='date'
                    error={!!errors.dateOfBirth}
                    helperText={errors?.dateOfBirth?.message}
                    required
                    />)} />
            </Grid>

            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                    <EnumSelector<UserGender>
                    enumerator={UserGender}
                    {...field}
                    size='small'
                    label={t('GENDER')}
                    autoFocus
                    variant="outlined"
                    fullWidth
                    i18n={{
                        enabled: true,
                        ns: 'patient'
                    }}
                    />)} />
            </Grid>

            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                name="documentType"
                control={control}
                render={({ field }) => (
                    <EnumSelector<DocumentType>
                    enumerator={DocumentType}
                    {...field}
                    size='small'
                    label={t('DOCUMENT_TYPE')}
                    autoFocus
                    variant="outlined"
                    fullWidth
                    i18n={{
                        enabled: true,
                        ns: 'patient'
                    }}
                    />)} />
            </Grid>

            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="documentNumber"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('DOCUMENT_NUMBER')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.documentNumber}
                            helperText={errors?.documentNumber?.message}
                            required
                        />)}/>
            </Grid>  

            <Grid item xs={12} md={12} className='w-full p-16'>
                <Controller
                name="maritalStatus"
                control={control}
                render={({ field }) => (
                    <EnumSelector<MaritalStatus>
                    enumerator={MaritalStatus}
                    {...field}
                    size='small'
                    label={t('MARITAL_STATUS')}
                    autoFocus
                    variant="outlined"
                    fullWidth
                    i18n={{
                        enabled: true,
                        ns: 'patient'
                    }}
                    />)} />
            </Grid>

            <Grid item xs={12} className='w-full p-16'>
                <Controller
                    name="homeAddress"
                    control={control}
                    render={({field}) => (
                        <TextField multiline
                                   rows={2}
                                   {...field}
                                   size='small'
                                   label={t('HOME_ADDRESS')}
                                   autoFocus
                                   variant="outlined"
                                   fullWidth
                        />)}/>
            </Grid>

            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                name="insuranceType"
                control={control}
                render={({ field }) => (
                    <EnumSelector<InsuranceType>
                    enumerator={InsuranceType}
                    {...field}
                    size='small'
                    label={t('INSURANCE_TYPE')}
                    autoFocus
                    variant="outlined"
                    fullWidth
                    i18n={{
                        enabled: true,
                        ns: 'patient'
                    }}
                    />)} />
            </Grid>

            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="insuranceName"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('INSURANCE_NAME')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.insuranceName}
                            helperText={errors?.insuranceName?.message}
                           
                        />)}/>
            </Grid>  


            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                name="linkedType"
                control={control}
                render={({ field }) => (
                    <EnumSelector<LinkedType>
                    enumerator={LinkedType}
                    {...field}
                    size='small'
                    label={t('LINKED_TYPE')}
                    autoFocus
                    variant="outlined"
                    fullWidth
                    i18n={{
                        enabled: true,
                        ns: 'patient'
                    }}
                    />)} />
            </Grid>
            


            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="placeOfBirth"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('PLACE_OF_BIRTH')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.placeOfBirth}
                            helperText={errors?.placeOfBirth?.message}
                          
                        />)}/>
            </Grid> 

            <Grid item xs={6} className='w-full p-16'>

                    <Controller
                        name="neighborhood"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                size='small'
                                label={t('NEIGHBORHOOD')}
                                autoFocus
                                variant="outlined"
                                fullWidth
                                error={!!errors.neighborhood}
                                helperText={errors?.neighborhood?.message}
                            
                            />)}/>
            </Grid> 


            <Grid item xs={6} className='w-full p-16'>

                    <Controller
                        name="municipality"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                size='small'
                                label={t('MUNICIPALITY')}
                                autoFocus
                                variant="outlined"
                                fullWidth
                                error={!!errors.municipality}
                                helperText={errors?.municipality?.message}
                           
                            />)}/>
            </Grid> 

            <Grid item xs={6} className='w-full p-16'>

                    <Controller
                        name="homePhone"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                size='small'
                                label={t('HOME_PHONE')}
                                autoFocus
                                variant="outlined"
                                fullWidth
                                error={!!errors.homePhone}
                                helperText={errors?.homePhone?.message}
                            
                            />)}/>
            </Grid> 


            <Grid item xs={6} className='w-full p-16'>

                    <Controller
                        name="officePhone"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                size='small'
                                label={t('OFFICE_PHONE')}
                                autoFocus
                                variant="outlined"
                                fullWidth
                                error={!!errors.officePhone}
                                helperText={errors?.officePhone?.message}
                           
                            />)}/>
            </Grid> 


            <Grid item xs={6} className='w-full p-16'>

                    <Controller
                        name="occupation"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                size='small'
                                label={t('OCCUPATION')}
                                autoFocus
                                variant="outlined"
                                fullWidth
                                error={!!errors.occupation}
                                helperText={errors?.occupation?.message}
                          
                            />)}/>
            </Grid> 

            <Grid item xs={6} className='w-full p-16'>

                    <Controller
                        name="email"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                size='small'
                                label={t('EMAIL')}
                                autoFocus
                                variant="outlined"
                                fullWidth
                                error={!!errors.email}
                                helperText={errors?.email?.message}
                           
                            />)}/>
            </Grid> 
            {/*
              <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                    name="tax"
                    control={control}
                    render={({field}) => (
                        <GenericSelector<Tax>
                            {...field}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.taxes}
                            render={(item) => <label>{item.name}</label>}
                            size='small'
                            label={t('common:TAX')}
                            variant="outlined"
                            fullWidth
                        />
                    )}/>
            </Grid>

             */}



            {/*<Grid item xs={12} className='w-full p-16'>
				<GenericUpload title={t('PROGRAM_FILE')}
							   accept={'application/pdf'}
							   disabled={!apResolution}
							   upFiles={(fs) => {
								   setFiles({ ...files, programFile: _.first(fs) });
							   }} initial={initialFiles?.programFile} />
			</Grid>*/}

        </Grid>


    </form>);


};


export default PatientForm;
