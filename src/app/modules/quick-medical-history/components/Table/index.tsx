import React from 'react';
import {useTranslation} from 'react-i18next';
import GenericTable from 'app/modules/common/components/GenericTable';
import {useAppDispatch, useAppSelector} from 'app/modules/common/hooks/use-app-redux';

import {
    GenericTableState,
    setContext,
    setLoading,
    setPaginatedData,
    setSelected
} from 'app/modules/common/components/GenericTable/store/generic-table.slice';
import {RowsDef, TableAction} from 'app/modules/common/components/GenericTable/GenericTableBody';
import _ from '@lodash';
import GenericModal from 'app/modules/common/components/GenericModal';

import moment from 'moment';
import {toast} from 'react-toastify';
import {FormUtils} from 'app/modules/common/utils/FormUtils';

import QuickMedicalHistoryForm, {QuickMedicalHistoryFormField} from '../Form';
import QuickMedicalHistoryDetails from '../Details';
import {QuickMedicalHistory} from 'api/repositories/quick-medical-history/types/quick-medical-history.types';
import ConfirmDialog from 'app/modules/common/components/ConfirmDialog';
import BooleanCell from 'app/modules/common/components/TableCell/BooleanCell';
import {Action_List, App_Modules} from 'api/graphql/schema/types';
import usePermits from 'app/modules/auth/hooks/use-permits';
import useRepository from "app/modules/common/hooks/use-repository";
import {QuickMedicalHistoryRepository} from "api/repositories/quick-medical-history/quick-medical-history.repository";
import {IPaginatedEntity} from "api/interfaces/IPaginatedEntity";


type DialogState = { view: boolean, add: boolean, edit: boolean, delete: boolean, deleteMany: false }
type CrudLoadingState = DialogState
type Props = {}
const QuickMedicalHistoryTable: React.FC<Props> = (props: Props) => {
    const {t} = useTranslation(['quick-medical-history', 'common']);
    const dispatch = useAppDispatch();
    const {hasPermission} = usePermits();
    const {paginator, query, context, selected} = useAppSelector(state => state.table) as GenericTableState;
    const quickMedicalHistoryRepo = useRepository(QuickMedicalHistoryRepository)
    const paginatorInput = paginator.in;

    const [dialog, setDialog] = React.useState<DialogState>({
        view: false,
        add: false,
        edit: false,
        delete: false,
        deleteMany: false
    });
    const [crudLoading, setCrudLoading] = React.useState<CrudLoadingState>({
        view: false,
        add: false,
        edit: false,
        delete: false,
        deleteMany: false
    });


    const selectedItem = _.first(selected) as QuickMedicalHistory;
    const handleOpenDialog = (type: keyof DialogState): void => {
        setDialog({...dialog, [type]: true});
    };

    const handleCloseDialog = (type: keyof DialogState): void => {
        setDialog({...dialog, [type]: false});
        // @ts-ignore
        dispatch(setSelected([]));
    };

    React.useEffect(() => {
        // @ts-ignore
        dispatch(setContext(App_Modules.QuickMedicalHistory));
    }, []);

    React.useEffect(() => {
        fetch();
    }, [paginatorInput, query]);

    const fetch = () => {
        // @ts-ignore
        dispatch(setLoading(true));
        quickMedicalHistoryRepo.findPaginated(
            {
                input: {
                    paginator: {limit: paginatorInput.rowsPerPage, page: paginatorInput.page},
                    where: query ? {or: [
                                            {quickMedicalHistoryType: {iLike: query}}, 
                                            {companionsName: {iLike: query}},
                                            {companionsPhoneNumber: {iLike: query}},
                                            {companionsType: {iLike: query}},
                                            {responsiblePhoneNumber: {iLike: query}},
                                        ]} : {}
                }
            }).then((res: IPaginatedEntity<QuickMedicalHistory>) => {
            // @ts-ignore
            dispatch(setPaginatedData(res));
        }).catch((err: any) => {
            // @ts-ignore
            dispatch(setLoading(false));
            toast.error(err?.toString());
        });
    };


    const addAction = (formData: QuickMedicalHistoryFormField) => {
        setCrudLoading({...crudLoading, add: true});
        quickMedicalHistoryRepo.create({input: {...formData}}).then(() => {
            setCrudLoading({...crudLoading, add: false});
            handleCloseDialog('add');
            fetch();

            toast.info(t('common:ELEMENT_CREATED'));
        }).catch((err: any) => {
            toast.error(err?.toString());
            setCrudLoading({...crudLoading, add: false});
        });
    };

    const editAction = (formData: QuickMedicalHistoryFormField) => {
        setCrudLoading({...crudLoading, edit: true});

        const toUpdateData = FormUtils.toUpdateValue<QuickMedicalHistoryFormField, QuickMedicalHistory>(formData, selectedItem);

        quickMedicalHistoryRepo.update({
            input: {
                entityId: selectedItem?.id,
                update: {...toUpdateData}
            }
        }).then(() => {
            setCrudLoading({...crudLoading, edit: false});
            handleCloseDialog('edit');
            fetch();
            toast.info(t('common:ELEMENT_EDITED'));
        }).catch((err: any) => {
            toast.error(err?.toString());
            setCrudLoading({...crudLoading, edit: false});
        });
    };

    const removeAction = () => {
        setCrudLoading({...crudLoading, delete: true});

        quickMedicalHistoryRepo.delete({input: {entityId: selectedItem?.id}}).then(() => {
            setCrudLoading({...crudLoading, delete: false});
            handleCloseDialog('delete');
            fetch();
            toast.info(t('common:ELEMENT_DELETED'));
        }).catch((err: any) => {
            setCrudLoading({...crudLoading, delete: false});
            handleCloseDialog('delete');
            toast.error(err?.toString());
        });
    };

    const removeMultipleAction = () => {
        setCrudLoading({...crudLoading, delete: true});
        const ids: Array<string> = selected.map(x => x.id);

        quickMedicalHistoryRepo.deleteMany({input: {where: {id: {in: ids}}}}).then(() => {
            setCrudLoading({...crudLoading, delete: false});
            handleCloseDialog('deleteMany');
            fetch();
            toast.info(t('common:ELEMENTS_DELETED'));
        }).catch((err: any) => {
            setCrudLoading({...crudLoading, delete: false});
            handleCloseDialog('deleteMany');
            toast.error(err?.toString());
        });
    };


    const rows: Array<RowsDef<QuickMedicalHistory>> = [
        {
            id: 'patient.identifier',
            align: 'left',
            sort: true,
            label: t('common:PATIENT'),
            render:(row)=><label>{row?.patient?.identifier}</label>
        },
        {
            id: 'quickMedicalHistoryType',
            align: 'left',
            sort: true,
            label: t('QUICK_MEDICAL_HISTORY_TYPE'),
            render:(row)=><label>{t(row?.quickMedicalHistoryType)}</label>
            
        },
        {
            id: 'companionsName',
            align: 'left',
            sort: true,
            label: t('COMPANIONS_NAME')
        },
        {
            id: 'companionsPhoneNumber',
            align: 'left',
            sort: true,
            label: t('common:DATE'),
            render:(row)=><label>{  moment(row?.createdAt).format('DD/MM/YYYY h:sA')}</label>
        }

    ];

    const actions: Array<TableAction> = [
        /*{
            label: t('common:VIEW'),
            action: (record) => handleOpenDialog('view'),
            icon: 'visibility'
        },*/
        {
            label: t('common:EDIT'),
            action: (record) => handleOpenDialog('edit'),
            icon: 'edit',
            disabled: !hasPermission(context, Action_List.Update)
        },
        {
            label: t('common:DELETE'),
            action: (record) => handleOpenDialog('delete'),
            icon: 'delete_forever',
            disabled: !hasPermission(context, Action_List.DeleteOne)
        },
        {
            label: t('MEDICAL_RECORDS'),
            action: (record) => handleOpenDialog('delete'),
            icon: '',
            disabled: !hasPermission(context, Action_List.DeleteOne)
        },
        {
            label: t('PHARMACOLOGICAL_MANAGEMENT'),
            action: (record) => handleOpenDialog('delete'),
            icon: '',
            disabled: !hasPermission(context, Action_List.DeleteOne)
        },
        {
            label: t('COMPREHENSIVE_MANAGEMENT'),
            action: (record) => handleOpenDialog('delete'),
            icon: '',
            disabled: !hasPermission(context, Action_List.DeleteOne)
        },
        {
            label: t('PARACLINICS_EVALUATIONS'),
            action: (record) => handleOpenDialog('delete'),
            icon: '',
            disabled: !hasPermission(context, Action_List.DeleteOne)
        },
        {
            label: t('PHYSICAL_EXAM'),
            action: (record) => handleOpenDialog('delete'),
            icon: '',
            disabled: !hasPermission(context, Action_List.DeleteOne)
        },
 
 
    ];


    const formId = {
        edit: `edit-quick-medical-history`,
        add: `add-quick-medical-history`
    };

    // @ts-ignore
    return (<>
            <div className='w-full flex flex-col'>
                <GenericTable rows={rows}
                              addBtn
                              headerIcon={'area_chart'}
                              onAddAction={() => handleOpenDialog('add')}
                              title={t('common:QUICK_MEDICAL_HISTORY')}
                              options={{actionColumn: true}}
                              onCheckSelectedMenuClick={() => handleOpenDialog('deleteMany')}
                              actions={actions}/>
            </div>

            <GenericModal onClose={() => handleCloseDialog('view')}
                          minHeight={150}
                          open={dialog.view}
                          title={`${t('common:DETAILS')}`}
                          handleOk={() => handleCloseDialog('view')}
                          okBtnTxt={t('common:CLOSE')}>
                <div className='w-full p-4'>
                    <QuickMedicalHistoryDetails row={selectedItem}/>
                </div>
            </GenericModal>

            <GenericModal maxWidth={'sm'} minHeight={200}
                          onClose={() => handleCloseDialog('add')}
                          formId={formId.add}
                          open={dialog.add}
                          title={t('common:ADD')}
                          cancelBtn
                          okLoading={crudLoading.add}
                          okBtnTxt={t('common:ADD')}>
                <div className='w-full p-4 mt-16'>
                    <QuickMedicalHistoryForm
                        upLoading={() => setCrudLoading({ ...crudLoading, add: true })}
                        submitAction={addAction}
                        formId={formId.add}/>
                </div>

            </GenericModal>

            <GenericModal maxWidth={'sm'} minHeight={200}
                          onClose={() => handleCloseDialog('edit')}
                          open={dialog.edit}
                          okLoading={crudLoading.edit}
                          title={`${t('common:EDIT')} : ${selectedItem?.patient.identifier}`}
                          okBtnTxt={t('common:EDIT')}
                          cancelBtn
                          formId={formId.edit}>
                <div className='w-full p-4 mt-16'>
                    <QuickMedicalHistoryForm
                        upLoading={() => setCrudLoading({ ...crudLoading, edit: true })}
                        initialData={{
                        ...FormUtils.setInitialData<QuickMedicalHistory, QuickMedicalHistoryFormField>(selectedItem,['patient']),
                        patient:selectedItem?.patient?.id
                    }}
                                  submitAction={editAction}
                                  formId={formId.edit}/>
                </div>
            </GenericModal>


            <ConfirmDialog onClose={() => handleCloseDialog('delete')}
                           title={t('common:CONFIRM_DELETE')}
                           type={'CONFIRM_DELETE'}
                           message={t('common:CONFIRM_DELETE_MSG')}
                           handleOk={() => {
                               removeAction();
                           }}
                           okLoading={crudLoading.delete}
                           open={dialog.delete}/>

            <ConfirmDialog onClose={() => handleCloseDialog('deleteMany')}
                           title={t('common:CONFIRM_DELETE_MULTIPLE')}
                           type={'CONFIRM_DELETE'}
                           message={t('common:CONFIRM_DELETE_MULTIPLE_MSG')}
                           handleOk={() => {
                               removeMultipleAction();
                           }}
                           okLoading={crudLoading.deleteMany}
                           open={dialog.deleteMany}/>

        </>

    );
};

export default QuickMedicalHistoryTable;
