import React from 'react';
import Chip from '@material-ui/core/Chip';

type Props = {
	price: number;
}

const PriceCell: React.FC<Props> = ({ price }: Props) => {
	return (

		<Chip size='small'
			  className='min-w-min'
			  color='primary'
			  label={`$ ${price}`}
		/>

	);
};

export default PriceCell;
