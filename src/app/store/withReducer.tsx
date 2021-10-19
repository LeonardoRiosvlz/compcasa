import { injectReducer } from './index' ;
import React from 'react';

const withReducer = (key: string, reducer:any) => (WrappedComponent: React.FC<any>) => {
	injectReducer(key, reducer);
	return (props: any) => <WrappedComponent {...props} />;
};

export default withReducer;
