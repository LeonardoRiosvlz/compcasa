import React from 'react';
import Chip from '@material-ui/core/Chip';

type Props = {
	value: number;
}

const NumberCell: React.FC<Props> = ({ value }: Props) => {
	return (

		<Chip size='small'
			  className='min-w-min'
			  color='primary'
			  label={`${new Intl.NumberFormat().format(value)}`}
		/>

	);
};

export default NumberCell;
