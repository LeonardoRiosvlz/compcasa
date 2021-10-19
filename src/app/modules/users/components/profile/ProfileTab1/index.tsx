import React from 'react';
import { useTranslation } from 'react-i18next';
import {
	Card,
	AppBar,
	Typography,
	Toolbar,
	CardContent,
	List,
	ListItemSecondaryAction,
	ListItemText,
	Button, Icon, IconButton, ListItem, Avatar

} from '@material-ui/core';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup/index';
import axios from 'axios';
import UserInfoForm from 'app/modules/users/components/profile/ProfileTab1/UserInfoForm';
import ChangePasswordForm from 'app/modules/users/components/profile/ProfileTab1/ChangePasswordForm';

type Props = {}
const ProfileTab1: React.FC<Props> = (props: Props) => {

	const { t } = useTranslation(['users', 'common']);

	const [data, setData] = React.useState<any>(null);

	React.useEffect(() => {
		axios.get('/api/profile/about').then(res => {
			setData(res.data);
		});
	}, []);

	if (!data) {
		return null;
	}

	const { general, work, contact, groups, friends } = data;


	return (
		<div className="md:flex w-full">
			<div className="flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32">
				<FuseAnimateGroup
					// @ts-ignore
					enter={{
						animation: 'transition.slideUpBigIn'
					}}
				>
					<Card className="w-full mb-16 rounded-8 shadow">
						<AppBar position="static" elevation={0}>
							<Toolbar className="px-8">
								<Typography variant="subtitle1" color="inherit" className="flex-1 px-12">
									{t('USER_INFO')}
								</Typography>
							</Toolbar>
						</AppBar>

						<CardContent>
							<div className="mb-24">
								<UserInfoForm />
							</div>

						</CardContent>
					</Card>


					<Card className="w-full mb-16 rounded-8 shadow">
						<AppBar position="static" elevation={0}>
							<Toolbar className="px-8">
								<Typography variant="subtitle1" color="inherit" className="flex-1 px-12">
									{t('CHANGE_PASSWORD')}
								</Typography>
							</Toolbar>
						</AppBar>

						<CardContent>
							<div className="mb-24">
								<ChangePasswordForm />
							</div>
						</CardContent>
					</Card>
				</FuseAnimateGroup>
			</div>

			<div className="flex flex-col md:w-320">
				<FuseAnimateGroup
					// @ts-ignore
					enter={{
						animation: 'transition.slideUpBigIn'
					}}
				>
					<Card className="w-full mb-16 rounded-8 shadow">
						<AppBar position="static" elevation={0}>
							<Toolbar className="px-8">
								<Typography variant="subtitle1" color="inherit" className="flex-1 px-12">
									Friends
								</Typography>
								<Button color="inherit" size="small">
									See 454 more
								</Button>
							</Toolbar>
						</AppBar>
						<CardContent className="flex flex-wrap p-8">
							{friends.map((friend: any) => (
								<img
									key={friend.id}
									className="w-64 m-4 rounded-4 block"
									src={friend.avatar}
									alt={friend.name}
								/>
							))}
						</CardContent>
					</Card>

					<Card className="w-full mb-16 rounded-8 shadow">
						<AppBar position="static" elevation={0}>
							<Toolbar className="px-8">
								<Typography variant="subtitle1" color="inherit" className="flex-1 px-12">
									Joined Groups
								</Typography>
								<Button color="inherit" size="small">
									See 6 more
								</Button>
							</Toolbar>
						</AppBar>
						<CardContent className="p-0">
							<List className="p-0">
								{groups.map((group: any) => (
									<ListItem key={group.id} className="px-8">
										<Avatar className="mx-8" alt={group.name}>
											{group.name[0]}
										</Avatar>
										<ListItemText
											primary={
												<div className="flex">
													<Typography
														className="font-medium"
														color="secondary"
														paragraph={false}
													>
														{group.name}
													</Typography>

													<Typography className="mx-4" paragraph={false}>
														{group.category}
													</Typography>
												</div>
											}
											secondary={group.members}
										/>
										<ListItemSecondaryAction>
											<IconButton>
												<Icon>more_vert</Icon>
											</IconButton>
										</ListItemSecondaryAction>
									</ListItem>
								))}
							</List>
						</CardContent>
					</Card>
				</FuseAnimateGroup>
			</div>
		</div>
	);


};


export default ProfileTab1;
