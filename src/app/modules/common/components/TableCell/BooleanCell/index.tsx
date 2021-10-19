import React from 'react';
import { useTranslation } from 'react-i18next';
import { Chip } from '@material-ui/core';
import YesIcon from '@material-ui/icons/ThumbUpAlt';
import NoIcon from '@material-ui/icons/ThumbDownAlt';

type Props = {
	value: boolean
}


const BooleanCell: React.FC<Props> = ({ value }: Props) => {

	const { t } = useTranslation('common');

	const text = value ? t('YES') : t('NO');
	const icon = value ? <YesIcon /> : <NoIcon />;
	const color: 'primary' | 'secondary' = value ? 'secondary' : 'primary';
	return (

		<Chip size='small'
			  color={color}
			  label={text}
			  icon={icon}
		/>


	);
};

export default BooleanCell;
