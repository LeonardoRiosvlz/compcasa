
import React from 'react';
import useNotifications from 'app/modules/common/hooks/use-notifications';
import { useLocation } from 'react-router';
import { NO_AUTH_ROUTES } from 'app/modules/common/constants';

type Props = {
	children: React.ReactNode | Array<React.ReactNode>
}
const InitDataProvider: React.FC<Props> = ({ children }: Props) => {
	const { pathname } = useLocation()

	const { fetch } = useNotifications();

	React.useEffect(() => {
		if(pathname && !NO_AUTH_ROUTES.some(r => r === pathname)){
			fetch();
		}

	}, [pathname]);


	return (
		<React.Fragment>
			{children}
		</React.Fragment>
	);
};

export default InitDataProvider;
