import React from 'react';
import { useTranslation } from 'react-i18next';
import GenericTable from 'app/modules/common/components/GenericTable';
import { useAppDispatch, useAppSelector } from 'app/modules/common/hooks/use-app-redux';
import {
	GenericTableState,
	setLoading,
	setContext,
	setPaginatedData, setSelected
} from 'app/modules/common/components/GenericTable/store/generic-table.slice';
import { RowsDef, TableAction } from 'app/modules/common/components/GenericTable/GenericTableBody';
import _ from '@lodash';
import GenericModal from 'app/modules/common/components/GenericModal';


import { toast } from 'react-toastify';
import { FormUtils } from 'app/modules/common/utils/FormUtils';

import RoleForm, { RoleFormField } from '../Form';
import RoleDetails from '../Details';
import { Role } from 'api/repositories/roles/types/roles.types';
import ConfirmDialog from 'app/modules/common/components/ConfirmDialog';
import { Action_List, App_Modules } from 'api/graphql/schema/types';
import usePermits from 'app/modules/auth/hooks/use-permits';
import useRepository from "../../../../common/hooks/use-repository";
import {RolesRepository} from "api/repositories/roles/role.repository";

type DialogState = { view: boolean, add: boolean, edit: boolean, delete: boolean, deleteMany: false }
type CrudLoadingState = DialogState
type Props = {}
const RoleTable: React.FC<Props> = (props: Props) => {
	const { t } = useTranslation(['users', 'common']);
	const dispatch = useAppDispatch();
	const { hasPermission } = usePermits();

	const { paginator, query, context, selected } = useAppSelector(state => state.table) as GenericTableState;
    const roleRepo = useRepository(RolesRepository)
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


	const selectedItem = _.first(selected) as Role;
	const handleOpenDialog = (type: keyof DialogState): void => {
		setDialog({ ...dialog, [type]: true });
	};

	const handleCloseDialog = (type: keyof DialogState): void => {
		setDialog({ ...dialog, [type]: false });
		// @ts-ignore
		dispatch(setSelected([]));
	};

	React.useEffect(() => {
		// @ts-ignore
		dispatch(setContext(App_Modules.UserRoles));
	}, []);

	React.useEffect(() => {
		fetch();
	}, [paginatorInput, query]);

	const fetch = () => {
		// @ts-ignore
		dispatch(setLoading(true));
		roleRepo.findPaginated(
			{
				input: {
					paginator: { limit: paginatorInput.rowsPerPage, page: paginatorInput.page },
					where: query ? { or: [{ name: { iLike: query } }, { description: { iLike: query } }] } : {}
				}
			}).then((res) => {
			// @ts-ignore
			dispatch(setPaginatedData(res));
		});
	};


	const addAction = (formData: RoleFormField) => {
		setCrudLoading({ ...crudLoading, add: true });
		roleRepo.create({ input: { ...formData } }).then(() => {
			setCrudLoading({ ...crudLoading, add: false });
			handleCloseDialog('add');
			fetch();

			toast.info(t('common:ELEMENT_CREATED'));
		}).catch((err) => {
			toast.error(err?.toString());
			setCrudLoading({ ...crudLoading, add: false });
			handleCloseDialog('add');
		});
	};

	const editAction = (formData: RoleFormField) => {
		setCrudLoading({ ...crudLoading, edit: true });

		const toUpdateData = FormUtils.toUpdateValue<RoleFormField, Role>(formData, selectedItem);

		roleRepo.update({
			input: {
				entityId: selectedItem.id,
				update: { ...toUpdateData }
			}
		}).then(() => {
			setCrudLoading({ ...crudLoading, edit: false });
			handleCloseDialog('edit');
			fetch();
			toast.info(t('common:ELEMENT_EDITED'));
		}).catch((err) => {
			toast.error(err?.toString());
			handleCloseDialog('edit');
			setCrudLoading({ ...crudLoading, edit: false });


		});
	};

	const removeAction = () => {
		setCrudLoading({ ...crudLoading, delete: true });

		roleRepo.delete({ input: { entityId: selectedItem.id } }).then(() => {
			setCrudLoading({ ...crudLoading, delete: false });
			handleCloseDialog('delete');
			fetch();
			toast.info(t('common:ELEMENT_DELETED'));
		}).catch((err) => {
			setCrudLoading({ ...crudLoading, delete: false });
			handleCloseDialog('delete');
			toast.error(err?.toString());
		});
	};

	const removeMultipleAction = () => {
		setCrudLoading({ ...crudLoading, delete: true });
		const ids: Array<string> = selected.map(x => x.id);

		roleRepo.deleteMany({ input: { where: { id: { in: ids } } } }).then(() => {
			setCrudLoading({ ...crudLoading, delete: false });
			handleCloseDialog('deleteMany');
			fetch();
			toast.info(t('common:ELEMENTS_DELETED'));
		}).catch((err) => {
			setCrudLoading({ ...crudLoading, delete: false });
			handleCloseDialog('deleteMany');
			toast.error(err?.toString());
		});
	};


	const rows: Array<RowsDef<Role>> = [
		{
			id: 'name',
			align: 'left',
			sort: true,
			label: t('common:NAME')
		},
		{
			id: 'description',
			align: 'left',
			sort: true,
			label: t('common:DESCRIPTION')
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
		}
	];


	const formId = {
		edit: `edit-role`,
		add: `add-role`
	};

	// @ts-ignore
	return (<>
			<div className='w-full flex flex-col'>
				<GenericTable rows={rows}
							  addBtn
							  headerIcon={'security'}
							  onAddAction={() => handleOpenDialog('add')}
							  title={t('common:USER_ROLES')}
							  options={{ actionColumn: true }}
							  onCheckSelectedMenuClick={() => handleOpenDialog('deleteMany')}
							  actions={actions} />
			</div>

			<GenericModal onClose={() => handleCloseDialog('view')}
						  minHeight={150}
						  open={dialog.view}
						  title={`${t('common:DETAILS')}`}
						  handleOk={() => handleCloseDialog('view')}
						  okBtnTxt={t('common:CLOSE')}>
				<div className='w-full p-4'>
					<RoleDetails row={selectedItem} />
				</div>
			</GenericModal>

			<GenericModal maxWidth={'md'} minHeight={350}
						  onClose={() => handleCloseDialog('add')}
						  formId={formId.add}
						  open={dialog.add}
						  title={t('common:ADD')}
						  cancelBtn
						  okLoading={crudLoading.add}
						  okBtnTxt={t('common:ADD')}>
				<div className='w-full p-4 mt-16'>
					<RoleForm submitAction={addAction} formId={formId.add} />
				</div>

			</GenericModal>

			<GenericModal maxWidth={'md'} minHeight={350}
						  onClose={() => handleCloseDialog('edit')}
						  open={dialog.edit}
						  title={`${t('common:EDIT')} : ${selectedItem?.name}`}
						  okBtnTxt={t('common:EDIT')}
						  cancelBtn
						  formId={formId.edit}>
				<div className='w-full p-4 mt-16'>
					<RoleForm initialData={{
						name: selectedItem?.name ?? '',
						description: selectedItem?.description ?? '',
						permits: selectedItem?.permits ?? []
					}}
								  submitAction={editAction}
								  formId={formId.edit} />
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
						   open={dialog.delete} />

			<ConfirmDialog onClose={() => handleCloseDialog('deleteMany')}
						   title={t('common:CONFIRM_DELETE_MULTIPLE')}
						   type={'CONFIRM_DELETE'}
						   message={t('common:CONFIRM_DELETE_MULTIPLE_MSG')}
						   handleOk={() => {
							   removeMultipleAction();
						   }}
						   okLoading={crudLoading.deleteMany}
						   open={dialog.deleteMany} />

		</>

	);
};

export default RoleTable;
