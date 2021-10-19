import React from 'react';
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField, Chip, TextFieldProps } from '@material-ui/core';



export type Props = {
	value: Array<string>,
	onChange: (...event: any[])=> void
} & TextFieldProps


const MultipleField: React.FC<Props> = ({value, name, label, onChange, ...props}: Props)=>{


	const handleChange=(e: React.ChangeEvent<{}>,v: Array<string>)=>{
		if(onChange){
			onChange({target:{name: name, value: v}})
		}
	}

	const options = Array.from(value ?? [])
	return(
		<Autocomplete
			multiple
			options={options}
			onChange={handleChange}
			value={options}
			freeSolo
			renderTags={(value, getTagProps) =>
				value.map((option, index) => (
					<Chip variant="outlined" size={"small"} label={option}  {...getTagProps({ index })}  />
				))
			}
			renderInput={(params) => (
				<TextField {...params} label={label} {...props} />
			)}
		/>
	)
}

export default MultipleField