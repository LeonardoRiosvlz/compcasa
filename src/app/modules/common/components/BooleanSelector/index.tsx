import React from 'react';
import { Icon, MenuItem, TextField, TextFieldProps } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

type Props = TextFieldProps;

type BooleanState = { value: boolean, icon: string, translate: string }
const BooleanSelector: React.FC<Props> = (props: Props) => {

	const { t } = useTranslation('common');
	const booleanArray: Array<BooleanState> = [
		{
			value: true,
			icon: 'radio_button_checked',
			translate: 'YES'
		},
		{
			value: false,
			icon: 'radio_button_unchecked',
			translate: 'NO'
		},

	];
	return (
		<TextField {...props} select>
			{booleanArray.map(({ value, icon, translate }, index) => {
				return (
					<MenuItem key={index} value={value as any}>
						<div className='flex items-center w-full'>
							<Icon style={{fontSize: 12}}>{icon}</Icon>
							<label className='ml-4'>{t(translate)}</label>
						</div>
					</MenuItem>
				);
			})}
		</TextField>

	);
};

export default BooleanSelector;
