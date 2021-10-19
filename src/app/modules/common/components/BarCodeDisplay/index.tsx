import React from 'react';
import { useBarcode } from 'react-barcodes';


type BarCodeOptions = {
	format?: string;
	width?: number;
	height?: number;
	displayValue?: boolean;
	text?: string;
	fontOptions?: string;
	font?: string;
	textAlign?: string;
	textPosition?: string;
	textMargin?: number;
	fontSize?: number;
	background?: string;
	lineColor?: string;
	margin?: number;
	marginTop?: number;
	marginBottom?: number;
	marginLeft?: number;
	marginRight?: number;
	flat?: boolean;
}

type Props = {
	code: string
	options?: BarCodeOptions
}

const BarCodeDisplay: React.FC<Props> = ({ code, options }: Props) => {
	const { inputRef } = useBarcode({
		value: code,
		options
	});
	return (<svg ref={inputRef} />);
};

export default BarCodeDisplay;
