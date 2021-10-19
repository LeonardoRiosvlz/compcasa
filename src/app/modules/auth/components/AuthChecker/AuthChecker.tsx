import FuseSplashScreen from '@fuse/core/FuseSplashScreen';

import React from 'react';
import {  useSelector } from 'react-redux';

import {  useLocation } from 'react-router';
import { selectNavigation } from 'app/store/fuse/navigationSlice';
import useAuth from 'app/modules/auth/hooks/use-auth';
import { NO_AUTH_ROUTES } from 'app/modules/common/constants';

type Props = {
	children: React.ReactNode | Array<React.ReactNode>
}
const AuthChecker: React.FC<Props> = ({children}: Props) => {

	const [waitAuthCheck, setWaitAuthCheck] = React.useState<boolean>(false);
    const {pathname} = useLocation()
	const {myInfo, state} = useAuth()
	const navigation = useSelector(selectNavigation);


	React.useEffect(() => {
		if (pathname && !NO_AUTH_ROUTES.some(r => r === pathname)) {
			setWaitAuthCheck(true);
			myInfo((error)=>{
				setWaitAuthCheck(false);
				if(!error){
					//Continue
				}
			})
		}
	}, [pathname]);


	return (
		<React.Fragment>
			{
				waitAuthCheck ? <FuseSplashScreen /> : <>{children}</>
			}
		</React.Fragment>
	);

};

export default AuthChecker
