import React from 'react';
import { useTranslation } from 'react-i18next';
import {
	Card,
	AppBar,
	Typography,
	Toolbar,
	CardContent,

} from '@material-ui/core';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup/index';
import axios from 'axios';
import GeneralInfoForm from 'app/modules/users/components/profile/ProfileTab2/GeneralForm';

type Props = {}
const ProfileTab2: React.FC<Props> = (props: Props) => {

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
									{t('GENERAL_INFO')}
								</Typography>
							</Toolbar>
						</AppBar>

						<CardContent>
							<div className="mb-24">
								<GeneralInfoForm />
							</div>
						</CardContent>
					</Card>

				</FuseAnimateGroup>
			</div>

		</div>
	);


};


export default ProfileTab2;
