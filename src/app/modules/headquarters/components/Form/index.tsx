import React from 'react';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Switch} from '@material-ui/core';
import useRepository from 'app/modules/common/hooks/use-repository';
import { User } from 'api/repositories/user/types/user.types';
import { UserRepository } from 'api/repositories/user/user.repository';
import { toast } from 'react-toastify';
import GenericSelector from 'app/modules/common/components/GenericSelector';

export type HeadquartersFormField = {
    name: string;
    code: string;
    city: string;
    email: string;
    phoneNumber: string;
    address: string;
    manager: string;
    isActive?: boolean;
    
}




type SelectorData = {
    manager: Array<User>
    //processCategories: Array<ProcessCategory>
}

type HeadquartersFormFiles = {
    //resolutionFile?: CloudFile,
    //programFile?: CloudFile
}

type Props = {
    submitAction: (data: HeadquartersFormField) => unknown
    formId: string
    initialData?: HeadquartersFormField
    initialFiles?: HeadquartersFormFiles,
    upLoading?: () => void,
}
const HeadquartersForm: React.FC<Props> = ({submitAction, initialFiles, upLoading, formId, initialData}: Props) => {

    const {t} = useTranslation(['headquarters', 'common']);
    //	const { processFile } = useFile();
    const schema = yup.object().shape({
        name: yup.string().required(t('common:NAME_REQUIRED')),
        code: yup.string().required(t('common:CODE_REQUIRED')),
        address: yup.string().required(t('common:ADDRESS_REQUIRED')),
        city: yup.string().required(t('common:CITY_REQUIRED')),
        email: yup.string().email().required(t('common:NAME_REQUIRED')),
        isActive: yup.boolean(),
    });

    const defaultValues: HeadquartersFormField | {} = initialData ? {
        ...initialData
    } : {isActive: true};

    const {handleSubmit, control, formState: {errors, dirtyFields, isValid}} = useForm<HeadquartersFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
        defaultValues

    });


    //const [files, setFiles] = React.useState<{ [K in keyof HeadquartersFormFiles]?: File }>({});

    const [selectorData, setSelectorData] = React.useState<SelectorData>({manager: []})

    const userRepo = useRepository(UserRepository)


    const loadSelectorData = async () => {

        try {
            const manager = await userRepo.findAll({input: {where: {}}})
            setSelectorData({manager})
        } catch (err) {
            toast.error(err?.toString())
        }
    }

    React.useEffect(() => {
        loadSelectorData().then()
    }, [])


    const onSubmit = (data: HeadquartersFormField) => {

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

            <Grid item xs={12} className='w-full p-16 flex justify-end'>

                <Controller
                    // @ts-ignore
                    name={'isActive'}
                    // @ts-ignore
                    defaultValue={true}
                    control={control}
                    render={({field: {onChange, onBlur, value, name, ref}}) => (
                        <div className='flex items-center'>
                            <Switch
                                size='small'
                                onBlur={onBlur}
                                onChange={onChange}
                                checked={Boolean(value)}
                                inputRef={ref}
                            /><label>{t('common:ACTIVE')}</label></div>)}/>
            </Grid>

            <Grid item xs={6} className='w-full p-16'>
                <Controller
                    name="name"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('common:NAME')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.name}
                            helperText={errors?.name?.message}
                            required
                        />)}/>
            </Grid>
            <Grid item xs={6} className='w-full p-16'>
                <Controller
                    name="city"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('common:CITY')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.name}
                            helperText={errors?.name?.message}
                            required
                        />)}/>
            </Grid>
            <Grid item xs={6} className='w-full p-16'>
                <Controller
                    name="phoneNumber"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('common:PHONE')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.name}
                            helperText={errors?.name?.message}
                            required
                        />)}/>
                </Grid>
                <Grid item xs={6} className='w-full p-16'>
                <Controller
                    name="code"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('common:CODE')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.name}
                            helperText={errors?.name?.message}
                            required
                        />)}/>
                </Grid>
                <Grid item xs={12} className='w-full p-16'>
                    <Controller
                        name="email"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                size='small'
                                label={t('common:EMAIL')}
                                autoFocus
                                variant="outlined"
                                fullWidth
                                error={!!errors.name}
                                helperText={errors?.name?.message}
                                required
                            />)}/>
                </Grid>

           
              <Grid item xs={12} md={12} className='w-full p-16'>
                <Controller
                    name="manager"
                    control={control}
                    render={({field}) => (
                        <GenericSelector<User>
                            {...field}
                            param={'id'}
                            displayField={'firstname'}
                            values={selectorData.manager}
                            render={(item) => <label>{item.firstname} {item.lastname}</label>}
                            size='small'
                            label={t('common:MANAGER')}
                            variant="outlined"
                            fullWidth
                        />
                    )}/>
            </Grid>

      

            <Grid item xs={12} className='w-full p-16'>
                <Controller
                    name="address"
                    control={control}
                    render={({field}) => (
                        <TextField multiline
                                   rows={4}
                                   {...field}
                                   size='small'
                                   label={t('common:ADDRESS')}
                                   autoFocus
                                   variant="outlined"
                                   fullWidth
                        />)}/>
            </Grid>

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


export default HeadquartersForm;
