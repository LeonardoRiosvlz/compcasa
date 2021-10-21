import React from 'react';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Switch} from '@material-ui/core';
import { QuickMedicalHistoryType } from 'api/graphql/schema/types';
import useRepository from 'app/modules/common/hooks/use-repository';
import { Patient } from 'api/repositories/patient/types/patient.types';
import { PatientRepository } from 'api/repositories/patient/patient.repository';
import EnumSelector from 'app/modules/common/components/EnumSelector';
import { toast } from 'react-toastify';
import GenericSelector from 'app/modules/common/components/GenericSelector';


export type QuickMedicalHistoryFormField = { 
    patient:string;
    quickMedicalHistoryType: QuickMedicalHistoryType;
    companionsName?: string;
    companionsPhoneNumber?: string;
    companionsType?: string;
    responsibleName?: string;
    responsiblePhoneNumber?: string;
    responsibleOfficeNumber?: string;
    reasonForConsultation?: string;
    relationship?: string;
    currentIllness?: string;

}



type SelectorData = {
    patient: Array<Patient>
    //processCategories: Array<ProcessCategory>
}

type QuickMedicalHistoryFormFiles = {
    //resolutionFile?: CloudFile,
    //programFile?: CloudFile
}

type Props = {
    submitAction: (data: QuickMedicalHistoryFormField) => unknown
    formId: string
    initialData?: QuickMedicalHistoryFormField
    initialFiles?: QuickMedicalHistoryFormFiles,
    upLoading?: () => void,
}
const QuickMedicalHistoryForm: React.FC<Props> = ({submitAction, initialFiles, upLoading, formId, initialData}: Props) => {

    const {t} = useTranslation(['quick-medical-history', 'common']);
    //	const { processFile } = useFile();
    const schema = yup.object().shape({
   
    });

    const defaultValues: QuickMedicalHistoryFormField | {} = initialData ? {
        ...initialData
    } : {};

    const {handleSubmit, control, formState: {errors, dirtyFields, isValid}} = useForm<QuickMedicalHistoryFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
        defaultValues

    });


    //const [files, setFiles] = React.useState<{ [K in keyof QuickMedicalHistoryFormFiles]?: File }>({});


    const [selectorData, setSelectorData] = React.useState<SelectorData>({patient: []})

    const patientRepo = useRepository(PatientRepository)


    const loadSelectorData = async () => {

        try {
            const patient = await patientRepo.findAll({input: {where: {}}})
            setSelectorData({patient})
        } catch (err) {
            toast.error(err?.toString())
        }
    }


    React.useEffect(() => {
        loadSelectorData().then()
    }, [])


    const onSubmit = (data: QuickMedicalHistoryFormField) => {

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

   
              <Grid item xs={12} md={12} className='w-full p-16'>
                <Controller
                    name="patient"
                    control={control}
                    render={({field}) => (
                        <GenericSelector<Patient>
                            {...field}
                            param={'id'}
                            displayField={'firstName'}
                            values={selectorData.patient}
                            render={(item) => <label>{item.firstName} {item.firstSurName}</label>}
                            size='small'
                            label={t('PATIENT')}
                            variant="outlined"
                            fullWidth
                        />
                    )}/>
            </Grid>


            <Grid item xs={12} className='w-full p-16'>

                <Controller
                    name="companionsName"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('COMPANION_NAME')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.companionsName}
                            helperText={errors?.companionsName?.message}

                        />)}/>
            </Grid>

            <Grid item xs={12} md={12} className='w-full p-16'>
                <Controller
                name="quickMedicalHistoryType"
                control={control}
                render={({ field }) => (
                    <EnumSelector<QuickMedicalHistoryType>
                    enumerator={QuickMedicalHistoryType}
                    {...field}
                    size='small'
                    label={t('QUICK_MEDICAL_HISTORY_TYPE')}
                    autoFocus
                    variant="outlined"
                    fullWidth
                    i18n={{
                        enabled: true,
                        ns: 'quick-medical-history'
                    }}
                    />)} />
            </Grid>


            <Grid item xs={12} className='w-full p-16'>

                <Controller
                    name="responsibleName"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('RESPONSIBLE_NAME')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.responsibleName}
                            helperText={errors?.responsibleName?.message}
                           
                        />)}/>
            </Grid>


            <Grid item xs={12} className='w-full p-16'>

                <Controller
                    name="responsiblePhoneNumber"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('RESPONSIBLE_PHONE_NUMBER')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.responsiblePhoneNumber}
                            helperText={errors?.responsiblePhoneNumber?.message}
                           
                        />)}/>
            </Grid>


            <Grid item xs={12} className='w-full p-16'>

                <Controller
                    name="responsibleOfficeNumber"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('RESPONSIBLE_OFFICE_NUMBER')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.responsibleOfficeNumber}
                            helperText={errors?.responsibleOfficeNumber?.message}
                           
                        />)}/>
            </Grid>


            <Grid item xs={12} className='w-full p-16'>

                <Controller
                    name="relationship"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('RELATIONSHIP')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.relationship}
                            helperText={errors?.relationship?.message}
                           
                        />)}/>
            </Grid>


            <Grid item xs={12} className='w-full p-16'>

                <Controller
                    name="currentIllness"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('CURRENT_ILLNESS')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.currentIllness}
                            helperText={errors?.currentIllness?.message}
                        
                        />)}/>
            </Grid>

        </Grid>


    </form>);


};


export default QuickMedicalHistoryForm;
