import React from "react";
import { TextField, MenuItem, TextFieldProps } from "@material-ui/core";
import COUNTRIES from "./all-countries.json";


type Props = TextFieldProps

type CountryState = { name: string, code: string, flag: string }
const CountrySelector: React.FC<Props> = (props: Props) => {
  const [countries, setCountries] = React.useState<Array<CountryState>>([]);

  React.useEffect(() => {
    setCountries(injectFlag());
  }, []);

  return (

    <TextField select {...props}>
      {countries.map((country) => {
        return (
          <MenuItem key={country.code} value={country.code}>
            <div className="flex items-center w-full">
              <img className="w-28 h-auto" src={country.flag} />
              <label className="ml-4">{country.name}</label>
            </div>
          </MenuItem>
        );
      })}
    </TextField>

  );
};

export default CountrySelector;


export const injectFlag = (countries: Array<CountryState> = Array.from(COUNTRIES)): Array<CountryState> => {
  return Array.from<CountryState>(COUNTRIES).map((country) => {
    return {
      ...country,
      flag: `/assets/images/flags/${country.code.toLocaleLowerCase()}.svg`
    };
  });
};

export const getCountryData = (code: string): CountryState | null => {
  return injectFlag().find((x) => x.code === code) as CountryState;
};
