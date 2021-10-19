import React from 'react';
import { makeStyles,  Typography, Tabs, Tab, Divider } from '@material-ui/core';
import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import useAuth from 'app/modules/auth/hooks/use-auth';
import { useTranslation } from 'react-i18next';
import ProfileTab1 from 'app/modules/users/components/profile/ProfileTab1';
import ProfileUploadAvatar from 'app/modules/users/components/profile/ProfileUploadAvatar';
import ProfileTab2 from 'app/modules/users/components/profile/ProfileTab2';


const useStyles = makeStyles(theme => ({
	layoutHeader: {
		height: 320,
		minHeight: 320,
		[theme.breakpoints.down('md')]: {
			height: 240,
			minHeight: 240
		}
	}
}));


type Props = {}
const UserProfilePage: React.FC<Props> = (props: Props) => {

	const classes = useStyles();
	const { t } = useTranslation(['users', 'common']);
	const [selectedTab, setSelectedTab] = React.useState<number>(0);

	const { user } = useAuth();

	const handleTabChange = (event: any, value: number) => {
		setSelectedTab(value);
	};

	return (
		<div className='w-full'>
		<FusePageSimple
			// @ts-ignore
			classes={{
				header: classes.layoutHeader,
				toolbar: 'min-h-56 h-56 items-end'
			}}
			header={
				<div
					className="p-24 flex flex-1 flex-codisableRipple l items-center justify-center md:flex-row md:items-end">
					<div
						className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
						<FuseAnimate animation="transition.expandIn" delay={300}>
							{/*user.data?.avatarFile ? <Avatar className="w-96 h-96" src={user.data.avatarFile.url} /> :
								<Avatar className="w-96 h-96"><h1>{String(user.data?.displayName ?? 'G')[0]}</h1>
								</Avatar>
							*/}
							<div>
								<ProfileUploadAvatar className="w-96 h-96 rounded" variant='square' firstname={user?.firstname ?? 'U'}
											avatar={user?.avatarFile as any} />
							</div>
						</FuseAnimate>
						<FuseAnimate animation="transition.slideLeftIn" delay={300}>
							<div className='flex flex-col md:mx-24 text-24 md:text-32 my-8 md:my-0'>
								<Typography
									className=""
									variant="h4"
									color="inherit"
								>
									{`${user?.displayName} `}
								</Typography>
							</div>
						</FuseAnimate>
					</div>

					{/*<div className="flex items-center justify-end">
						<Button className="mx-8" variant="contained" color="secondary" aria-label="Follow">
							Follow
						</Button>
						<Button variant="contained" color="primary" aria-label="Send Message">
							Send Message
						</Button>
					</div>*/}
				</div>
			}
			contentToolbar={
				<Tabs
					value={selectedTab}
					onChange={handleTabChange}
					indicatorColor="primary"
					textColor="inherit"
					variant="scrollable"
					scrollButtons="off"
					className="w-full px-24 -mx-4 min-h-40"
					classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
					TabIndicatorProps={{
						children: <Divider className="w-full h-full rounded-full opacity-50" />
					}}
				>
					<Tab className="text-14 font-bold min-h-40 min-w-64 mx-4" disableRipple label={t('common:INFO')} />
					<Tab className="text-14 font-bold min-h-40 min-w-64 mx-4" disableRipple label={t('common:GENERAL')} />
				</Tabs>
			}
			content={
				<div className="p-16 sm:p-24">
					{selectedTab === 0 && <ProfileTab1 />}
					{selectedTab === 1 && <ProfileTab2 />}
				</div>
			}
		/>
		</div>
	);
};

export default UserProfilePage;
