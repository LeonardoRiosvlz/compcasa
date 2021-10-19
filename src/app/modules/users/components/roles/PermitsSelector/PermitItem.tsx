import React from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import _ from '@lodash';
import { TreeItem } from '@material-ui/lab';
import { AvailablePermit, Permit } from 'api/repositories/roles/types/roles.types';
import { Action_List, App_Modules } from 'api/graphql/schema/types';


type Props = {
	permit: AvailablePermit,
	nodeId: string,
	setPermits: (permits: Array<Permit>) => void
	initial: Array<Permit>

}

export type SelectedState = Permit

const PermitItem: React.FC<Props> = ({ permit, initial = [], nodeId, setPermits }: Props) => {

	const { t } = useTranslation(['users', 'common']);
	const { actions, module } = permit;

	const [selected, setSelected] = React.useState<Array<SelectedState>>(initial);
	const [checked, setChecked] = React.useState<{ all: boolean, indeterminate: boolean }>({
		indeterminate: false,
		all: false
	});

	const handleChange = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {

		if (checked) {
			setSelected(actions.map<SelectedState>((act) => {
				return {
					module,
					action: act
				};
			}));
		} else {
			setSelected([]);
		}

	};



	React.useEffect(() => {
		if (setPermits) {
			setPermits(selected);
		}
		const all: boolean = selected.length === actions.length;
		const indeterminate: boolean = !all && selected.length > 0;

		setChecked({ all, indeterminate });
	}, [selected]);

	const handleChangeItem = (action: Action_List, checked: boolean) => {
		const arrayCopy = [...selected];
		const permit: Permit = {
			module,
			action
		};

		if (!checked) {
			_.remove(arrayCopy, (e) => {
				return e.action === action && e.module === module;
			});
		} else {
			arrayCopy.push(permit);
		}

		setSelected(arrayCopy);
	};

	return (
		<TreeItem nodeId={nodeId} label={
			<div className='w-full flex justify-between items-center'>
				<strong><small>{t(`common:${module}`)}</small></strong>
				<Checkbox
					size='small'
					checked={checked.all}
					indeterminate={checked.indeterminate}
					onChange={handleChange}
				/>
			</div>
		}>
			{
				actions.map((act, i) => {
					const focused = selected.find(x => x.module === module && x.action === act);

					return (
						<FormControlLabel key={i}
										  label={<small>{t(act)}</small>}
										  control={
											  <Checkbox
												  size='small'
												  checked={Boolean(focused)}
												  onChange={({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
													  handleChangeItem(act, checked);
												  }
												  }
											  />
										  }
						/>

					);
				})
			}
		</TreeItem>
	);
};


export default PermitItem;
