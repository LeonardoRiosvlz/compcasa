import React from 'react';

import BarCodeDisplay from 'app/modules/common/components/BarCodeDisplay';

type Props = {
	value: string
}

const BarCodeCell: React.FC<Props> = ({ value }: Props) => {
	return (<div className='w-64'>
		<BarCodeDisplay code={value} options={{ width: 1, height: 25, fontSize:16  }} />
	</div>);
};

export default BarCodeCell;
