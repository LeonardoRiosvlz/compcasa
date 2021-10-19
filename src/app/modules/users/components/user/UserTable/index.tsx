import React from 'react';
import { useTranslation } from 'react-i18next';
import GenericTable from 'app/modules/common/components/GenericTable';
import { useAppDispatch, useAppSelector } from 'app/modules/common/hooks/use-app-redux';
import {
	GenericTableState,
	setContext,
	setLoading,
	setPaginatedData, setSelected
} from 'app/modules/common/components/GenericTable/store/generic-table.slice';
import { RowsDef, TableAction } from 'app/modules/common/components/GenericTable/GenericTableBody';
import _ from '@lodash';
import GenericModal from 'app/modules/common/components/GenericModal';
import { toast } from 'react-toastify';
import { User } from 'api/repositories/user/types/user.types';
import UserCell from 'app/modules/common/components/TableCell/UserCell';
import BooleanCell from 'app/modules/common/components/TableCell/BooleanCell';
import UserDetails from 'app/modules/users/components/user/UserDetails';
import UserForm, { UserFormField } from 'app/modules/users/components/user/UserForm';

import ConfirmDialog from 'app/modules/common/components/ConfirmDialog';
import useFile from 'app/modules/files/hooks/use-file';
import { FormUtils } from 'app/modules/common/utils/FormUtils';
import { Action_List, App_Modules } from 'api/graphql/schema/types';
import usePermits from 'app/modules/auth/hooks/use-permits';
import useRepository from "app/modules/common/hooks/use-repository";
import {UserRepository} from "api/repositories/user/user.repository";

type DialogState = { view: boolean, add: boolean, edit: boolean, delete: boolean }
type CrudLoadingState = Omit<DialogState, 'view'>
type Props = {}
const UserTable: React.FC<Props> = (props: Props) => {
	const { t } = useTranslation(['users', 'common']);
	const dispatch = useAppDispatch();
	const {hasPermission} = usePermits()
	const { paginator, query, context, selected } = useAppSelector(state => state.table) as GenericTableState;

	const userRepo = useRepository(UserRepository)

	const paginatorInput = paginator.in;

	const [dialog, setDialog] = React.useState<DialogState>({ view: false, add: false, edit: false, delete: false });
	const [crudLoading, setCrudLoading] = React.useState<CrudLoadingState>({ add: false, edit: false, delete: false });

	const [file, setFile] = React.useState<File | null>(null);

	const firstUser: User | undefined | null = _.first(selected) as User;
	const fullName: string = `${firstUser?.firstname ?? ''} ${firstUser?.lastname ?? ''}`;

	const handleOpenDialog = (type: keyof DialogState): void => {
		setDialog({ ...dialog, [type]: true });
	};

	const handleCloseDialog = (type: keyof DialogState): void => {
		setDialog({ ...dialog, [type]: false });
		// @ts-ignore
		dispatch(setSelected([]));
	};

	const { processFile } = useFile();


	const setAvatarFile = async (): Promise<{ avatarFile: string } | null> => {
		if (file) {
			return await processFile<{ avatarFile: string }>({
				fileParam: 'avatarFile',
				file,
				toRemove: firstUser?.avatarFile?.id
			});
		}
		return null;
	};


	React.useEffect(() => {
		// @ts-ignore
		dispatch(setContext(App_Modules.Users));
	}, []);

	React.useEffect(() => {
		fetch();
	}, [paginatorInput, query]);

	const fetch = () => {
		// @ts-ignore
		dispatch(setLoading(true));
		  userRepo.findPaginated(
			{
				input: {
					paginator: { limit: paginatorInput.rowsPerPage, page: paginatorInput.page },
					where: query ? {
						or: [
							{ username: { iLike: query } },
							{ firstname: { iLike: query } },
							{ lastname: { iLike: query } }
						]
					} : {}
				}
			}).then((res) => {
			// @ts-ignore
			dispatch(setPaginatedData(res));
		});
	};


	const addAction = async (formData: UserFormField) => {
		setCrudLoading({ ...crudLoading, add: true });
		const fileIdentifier = await setAvatarFile();
		userRepo.create({
			input: {
				username: formData.username,
				email: formData.email,
				roles: formData.roles,
				firstname: formData.firstname,
				isAdmin: formData.isAdmin,
				isActive: formData.isActive,
				lastname: formData.lastname,
				avatarFile: fileIdentifier?.avatarFile,
				password: formData.password,
				profile: {
					area: formData?.area,
					position: formData?.position
				}

			}
		}).then(() => {
			setCrudLoading({ ...crudLoading, add: false });
			handleCloseDialog('add');
			setFile(null);
			fetch();
			toast.info(t('common:ELEMENT_CREATED'));
		}).catch((err) => {
			toast.error(err?.toString());
			setFile(null);
			setCrudLoading({ ...crudLoading, add: false });
			handleCloseDialog('add');

		});
	};

	const editAction = async (formData: UserFormField) => {

		setCrudLoading({ ...crudLoading, edit: true });
		const fileIdentifier = await setAvatarFile();
		const toUpdateData = FormUtils.toUpdateValue<UserFormField, User>(formData, firstUser);
		userRepo.update({
			input: {
				entityId: firstUser?.id,
				update: {
					...toUpdateData,
					avatarFile: fileIdentifier?.avatarFile,
					profile: {
						area: formData?.area,
						position: formData?.position
					}
				}
			}
		}).then(() => {
			setCrudLoading({ ...crudLoading, edit: false });
			handleCloseDialog('edit');
			setFile(null);
			fetch();
			toast.info(t('common:ELEMENT_EDITED'));
		}).catch((err) => {
			toast.error(err?.toString());
			setFile(null);
			handleCloseDialog('edit');
			setCrudLoading({ ...crudLoading, edit: false });

		});
	};

	const removeAction = () => {
		setCrudLoading({ ...crudLoading, delete: true });
		userRepo.delete({ input: { entityId: firstUser.id } }).then(() => {
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


	// @ts-ignore
	const rows: Array<RowsDef<User>> = [
		{
			id: 'user',
			align: 'left',
			sort: true,
			label: t('common:USER'),
			render: (row: User) => <UserCell item={row} />

		},

		{
			id: 'verified',
			align: 'center',
			sort: true,
			label: t('VERIFIED'),
			render: (row: User) => <BooleanCell value={row.verified} />

		}


	];

	const actions: Array<TableAction> = [
		{
			label: t('common:VIEW'),
			action: (record) => handleOpenDialog('view'),
			icon: 'visibility'
		},
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
		edit: `edit-user`,
		add: `add-user`
	};


// @ts-ignore
	return (<>
			<div className='w-full flex flex-col'>
				<GenericTable rows={rows}
							  addBtn
							  headerIcon={'people'}
							  onAddAction={() => handleOpenDialog('add')}
							  title={t('common:USERS')}
							  options={{ actionColumn: true }}
							  actions={actions} />
			</div>


			<GenericModal onClose={() => handleCloseDialog('view')}
						  open={dialog.view}
						  title={`${t('common:DETAILS')} : ${fullName}`}
						  okLoading={crudLoading.add}
						  handleOk={() => handleCloseDialog('view')}
						  okBtnTxt={t('common:CLOSE')}>
				<div className='w-full p-4'>
					<UserDetails user={firstUser} />
				</div>
			</GenericModal>

			<GenericModal onClose={() => handleCloseDialog('add')}
						  formId={formId.add}
						  open={dialog.add}
						  title={t('common:ADD')}
						  cancelBtn
						  okLoading={crudLoading.add}
						  okBtnTxt={t('common:ADD')}>
				<div className='w-full p-4'>
					<UserForm submitAction={addAction} formId={formId.add} processFile={setFile} />
				</div>

			</GenericModal>

			<GenericModal onClose={() => handleCloseDialog('edit')}
						  open={dialog.edit}
						  title={`${t('common:EDIT')} : ${fullName}`}
						  okBtnTxt={t('common:EDIT')}
						  cancelBtn
						  okLoading={crudLoading.edit}
						  formId={formId.edit}>

				<UserForm initialData={{
					username: firstUser?.username ?? '',
					firstname: firstUser?.firstname ?? '',
					lastname: firstUser?.lastname ?? '',
					roles: Array.from(firstUser?.roles ?? []).map(x => x.id),
					email: firstUser?.email ?? '',
					isActive: firstUser?.isActive ?? true,
					isAdmin: firstUser?.isAdmin ?? false
				}}
						  processFile={setFile}
						  submitAction={editAction}
						  userId={firstUser?.id}
						  formId={formId.edit} />
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

		</>

	);
};

export default UserTable;
