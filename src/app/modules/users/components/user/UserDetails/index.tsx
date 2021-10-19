import React from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import UserAvatar from 'app/modules/users/components/UserAvatar';
import { Divider } from '@material-ui/core';
import { Profile, User } from 'api/repositories/user/types/user.types';
import { toast } from 'react-toastify';
import useRepository from "../../../../common/hooks/use-repository";
import {UserRepository} from "api/repositories/user/user.repository";


type Props = {
	user: User | null | undefined
}
const UserDetails: React.FC<Props> = ({ user }: Props) => {

	const { t } = useTranslation(['users', 'common']);
	const [profile, setProfile] = React.useState<Profile | null>(null);
	const userRepo = useRepository(UserRepository)

	React.useEffect(() => {
		if (user) {
			userRepo.getUserProfile(user.id ).then((result) => {
				setProfile(result);

			}).catch((err) => {
				toast.error(err?.toString());
			});
		}

	}, [user]);

	if (!user) {
		return (<div className='w-full flex flex-col'>
				<strong>No User Data</strong>
			</div>

		);
	}


	return (<div className='w-full flex flex-col'>

		<div className='w-full p-32 flex justify-center'>
			<UserAvatar className='w-96 h-96' firstname={user.firstname} avatar={user?.avatarFile as any} readonly />
		</div>

		<h3 className='mt-2'>{t('USER_INFO')}</h3>
		<Divider className='mb-16 w-3/4' />
		<Grid container className='w-100'>
			<Grid item className='flex flex-col p-4' xs={12} md={6}>

				<label
					className='my-4'><strong>{`${t('FULL_NAME')}: `}</strong> {`${user.firstname} ${user.lastname || ''}`}
				</label>
				<label className='my-4'><strong>{`${t('EMAIL')}: `}</strong> {`${user.email}`}</label>

			</Grid>

			<Grid item className='flex flex-col p-4' xs={12} md={6}>

				<label className='my-4'><strong>{`${t('USERNAME')}: `}</strong> {`${user.username}`}</label>
				<label
					className='my-4'><strong>{`${t('VERIFIED')}: `}</strong> {user.verified ? t('common:YES') : t('common:NO')}
				</label>
			</Grid>


		</Grid>


		{profile && <>
			<h3 className='mt-48'>{t('GENERAL_INFO')}</h3>
			<Divider className='mb-16 w-3/4' />
			<Grid container className='w-100'>
				<Grid item className='flex flex-col p-4' xs={12} md={6}>

					<label className='my-4'><strong>{`${t('COUNTRY')}: `}</strong> {`${profile?.country ?? 'N/A'}`}
					</label>
					<label className='my-4'><strong>{`${t('CITY')}: `}</strong> {`${profile?.city ?? 'N/A'}`}</label>


				</Grid>

				<Grid item className='flex flex-col p-4' xs={12} md={6}>

					<label
						className='my-4'><strong>{`${t('GENDER')}: `}</strong> {t(`common:${profile?.gender ?? 'NOT_SPECIFIED'}`)}
					</label>
					<label className='my-4'><strong>{`${t('PHONE')}: `}</strong> {profile?.phoneNumber ?? 'N/A'}</label>

				</Grid>

				<Grid item className='flex flex-col p-4 my-16' xs={12}>
					{profile.personalWeb && <label className='my-4'><strong>{`${t('WEB_SITE')}: `}</strong>
						<a href={profile?.personalWeb}>{`${profile?.personalWeb}`} </a></label>}

					{profile.btcWallet &&
					<label className='my-4'><strong>{`${t('BTC_WALLET')}: `}</strong> {profile?.btcWallet ?? 'N/A'}
					</label>}

					{profile.aboutMe &&
					<div className='w-full mt-24 flex flex-col '>
						<strong className='mb-4'>{t('common:ABOUT')}</strong>
						<p>{profile.aboutMe}</p>
					</div>}
				</Grid>


			</Grid>


		</>}

	</div>);


};


export default UserDetails;
