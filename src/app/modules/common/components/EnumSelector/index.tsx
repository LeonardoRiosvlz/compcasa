import React from 'react';
import { TextField, MenuItem, TextFieldProps, SelectProps, Chip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

type Enum<E> = Record<keyof E, number | string> & { [k: number]: string };

type Props<T> = {
	enumerator: any,
	multiple?: boolean,
	i18n?: { enabled: boolean, ns?: string }
} & Omit<TextFieldProps, 'select'>

const EnumSelector = <T, >({
							   multiple,
							   i18n,
							   enumerator,
							   ...props
						   }: Props<T>) => {

	const [values, setValues] = React.useState<Array<T>>([]);
	const { t } = useTranslation(i18n?.ns);
	React.useEffect(() => {
		setValues(Object.keys(enumerator).map(k => enumerator[k] as T));
	}, []);


	const selectProps: SelectProps = {
		multiple
	};

	if (multiple) {
		selectProps.renderValue = (selection: any) => {
			return <div className='flex w-100 flex-wrap'>{
				(selection as Array<any> ?? []).map<any>((value, i) => {
					return (
						<Chip className='p-2 m-1 flex' key={i} size={'small'}
							  label={i18n?.enabled ? t(value) : value} />
					);
				}
				)
				}</div>;
		};
	}
	return (

		<TextField select {...props as TextFieldProps} SelectProps={{
			...selectProps
		}}>
			{values.map((item, index) => {
				return (
					<MenuItem key={index} value={item as any}>
						<div className='flex w-full'>
							<label>{i18n?.enabled ? t(String(item)) : item}</label>
						</div>
					</MenuItem>
				);
			})}
		</TextField>

	);
};

export default EnumSelector;
