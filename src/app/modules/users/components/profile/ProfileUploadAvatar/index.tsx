import React from 'react';
import UserAvatar, { UserAvatarProps } from 'app/modules/users/components/UserAvatar';
import useFile from 'app/modules/files/hooks/use-file';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import useAuth from 'app/modules/auth/hooks/use-auth';
import useRepository from "app/modules/common/hooks/use-repository";
import {UserRepository} from "api/repositories/user/user.repository";


type Props = Omit<UserAvatarProps, 'callBack' | 'readonly'>
const ProfileUploadAvatar: React.FC<Props> = ({ avatar, firstname, ...props }: Props) => {

	const { processFile, loading } = useFile();
	const { myInfo } = useAuth();
	const { t } = useTranslation(['users', 'common']);


	const userRepo = useRepository(UserRepository)

	const onSelectImage = (file: File) => {

		processFile<{ avatarFile?: string }>({
			file,
			toRemove: avatar?.id,
			fileParam: 'avatarFile'
		}).then(({ avatarFile }) => {
			userRepo.updateMe({ input: { avatarFile } }).then(() => {
				toast.info(t('common:PROFILE_UPDATED'));
				myInfo();
			}).catch((err) => {
				toast.error(err?.toString());
			});
		});
	};


	return (<UserAvatar firstname={firstname}
						avatar={avatar}
						loading={loading.signed || loading.upload || loading.fetch || loading.create}
						callBack={onSelectImage} {...props} />


	);


};


export default ProfileUploadAvatar;
