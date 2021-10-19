import React from 'react';
import {TextField, MenuItem, TextFieldProps, Chip, SelectProps} from '@material-ui/core';
import {toast} from 'react-toastify';


type Props<T> = {
    param: keyof T
    displayField: keyof T
    values?: Array<T>
    loadFunction?: () => Promise<Array<T>>,
    render?: (item: T) => string | Date | number | React.ReactNode | Array<React.ReactNode>
    onLoadSuccess?: () => void
    multiple?: boolean


} & Omit<TextFieldProps, 'select'>

const GenericSelector = <T, >({
                                  param,
                                  displayField,
                                  loadFunction,
                                  render,
                                  multiple,
                                  onLoadSuccess,
                                  values = [],
                                  ...props
                              }: Props<T>) => {
    const [data, setData] = React.useState<Array<T>>([]);


    React.useEffect(() => {
        if (loadFunction) {
            loadFunction().then((result) => {
                setData(result);
            }).catch((err) => {
                toast.error(err?.toString());
            });
        }

    }, [loadFunction]);


    React.useEffect(() => {
        if (values && values.length > 0) {
            setData(values)
        }

    }, [values]);


    React.useEffect(() => {

        if (data.length >= 0 && onLoadSuccess) {
            onLoadSuccess();
        }

    }, [data]);


    const showValue = (v: T | any): React.ReactNode | any => {
        return render ? render(v) : <label>{v[displayField]}</label>;
    };

    const value2Render = (v: any): React.ReactNode | any => {
        const item = data.find(x => x[param] === v);
        if (item) {
            return showValue(item);
        }
        return 'n/a';
    };

    const selectProps: SelectProps = {
        multiple
    };
    if (multiple) {
        selectProps.renderValue = (selection: any) => {
            return <div className='flex w-100 flex-wrap'>{
                (selection as Array<any>).map<any>((value, i) => {
                        return (
                            <Chip className='m-2 flex' key={i} size={'small'} label={value2Render(value)}/>
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
            {data.map((item, index) => {
                return (
                    <MenuItem key={index} value={item[param] as any}>
                        <div className='flex w-full'>
                            {showValue(item)}
                        </div>
                    </MenuItem>
                );
            })}
        </TextField>

    );
};

export default GenericSelector;
