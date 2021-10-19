import React from 'react';
import Chip from '@material-ui/core/Chip'

type Props = {
	value: number
}

const PercentCell: React.FC<Props> = ({ value }: Props) => {
	return (

		<Chip size='small'
			  className='w-64'
			  color='primary'
			  label={`${value} %`}
		/>

	);
};

export default PercentCell;
