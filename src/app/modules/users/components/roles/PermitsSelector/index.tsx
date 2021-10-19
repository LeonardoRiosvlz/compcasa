import React from 'react';
import { useTranslation } from 'react-i18next';
import { TreeView } from '@material-ui/lab';
import _ from '@lodash';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Permit } from 'api/repositories/roles/types/roles.types';

import PermitItem from 'app/modules/users/components/roles/PermitsSelector/PermitItem';
import { App_Modules } from 'api/graphql/schema/types';
import usePermits from 'app/modules/auth/hooks/use-permits';


type Props = {
	setPermits: (permits: Array<Permit>) => void
	initial: Array<Permit>

}
const PermitsSelector: React.FC<Props> = ({ setPermits, initial }: Props) => {

	const { t } = useTranslation(['user', 'common']);
	const { available } = usePermits();

	const [selected, setSelected] = React.useState<Array<Permit>>(initial);

	const handlePermitsSelection = (permits: Array<Permit>, module: App_Modules) => {
		const arrayCopy = [...selected];
		_.remove(arrayCopy, (e) => {
			return (
				e.module === module
			);
		});
		setSelected([...arrayCopy, ...permits]);
	};

	React.useEffect(() => {
		setPermits(selected);
	}, [selected]);

	return (<TreeView
			aria-label="multi-select"
			defaultCollapseIcon={<ExpandMoreIcon />}
			defaultExpandIcon={<ChevronRightIcon />}
		>{
			available.map((permit, i) => {

				return (
					<PermitItem
						key={i}
						nodeId={`${i}`}
						permit={permit}
						initial={initial.filter(x => x.module === permit.module)}
						setPermits={(p) => handlePermitsSelection(p, permit.module)} />);
			})
		}
		</TreeView>


	);

};


export default PermitsSelector;
