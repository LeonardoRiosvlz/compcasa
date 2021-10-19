import React from 'react';
import Chip from '@material-ui/core/Chip';
import moment from 'moment'

type Props = {
	value: Date
}

const DateCell: React.FC<Props> = ({ value }: Props) => {
	return (

		<Chip size='small'
			  className='w-90'
			  color='primary'
			  label={`${moment(value).format('L')}`}
		/>

	);
};

export default DateCell;
