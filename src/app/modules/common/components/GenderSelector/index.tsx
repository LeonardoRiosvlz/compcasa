import React from 'react';
import { Icon, MenuItem, TextField, TextFieldProps } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { UserGender } from 'api/graphql/schema/types';

type Props = TextFieldProps

type GenderState = { gender: UserGender, icon: string }
const GenderSelector: React.FC<Props> = (props: Props) => {

	const { t } = useTranslation('common');
	const genderArray: Array<GenderState> = [
		{
			gender: UserGender.Male,
			icon: 'male'
		},
		{
			gender: UserGender.Female,
			icon: 'female'
		},
		{
			gender: UserGender.TransGender,
			icon: 'transgender'
		},
		{
			gender: UserGender.NotSpecified,
			icon: 'remove'
		}
	];
	return (<TextField  {...props} select>
			{genderArray.map(({ gender, icon }) => {
				return (
					<MenuItem key={gender} value={gender}>
						<div className='flex align-center w-full'>
							<Icon>{icon}</Icon>
							<label className='ml-4'>{t(gender.toUpperCase())}</label>
						</div>
					</MenuItem>
				);
			})}
		</TextField>

	);
};

export default GenderSelector;
