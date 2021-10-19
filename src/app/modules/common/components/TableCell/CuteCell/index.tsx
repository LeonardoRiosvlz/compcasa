import React from 'react';
import Chip from '@material-ui/core/Chip';

type Props = {
	value: any
}

const CuteCell: React.FC<Props> = ({ value }: Props) => {
	return (

		<Chip size='small'
			  className='mx-2'
			  color='secondary'
			  label={value}
		/>

	);
};

export default CuteCell;
