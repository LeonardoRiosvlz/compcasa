import React from 'react';
import Chip from '@material-ui/core/Chip';
import { useTranslation } from 'react-i18next';


export type ColorValue = {
	value: string;
	color: string
}

type Props = {
	schema: Array<ColorValue>
	value: string
	i18n: { ns?: string }
}

const ColorCell: React.FC<Props> = ({ value, schema, i18n: { ns } }: Props) => {

	const { t } = useTranslation(ns ? ns : 'common')

	const backgroundColor = schema.find(x => x.value === value)?.color ?? 'gray'
	return (

		<Chip size='small'
			style={{ backgroundColor, color: 'white' }}
			className='mx-2'

			label={t(value)}
		/>

	);
};

export default ColorCell;
