/* eslint-disable @typescript-eslint/no-explicit-any */

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { Fragment, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { getAllCountriesQuery, getCountryQuery } from "../query";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Countries() {
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  const { data } = useQuery(getAllCountriesQuery);
  const [getCountry, { data: selectedCountryDetails }] =
    useLazyQuery(getCountryQuery);

  return (
    <Fragment>
      <Select
        sx={{ width: "300px" }}
        MenuProps={MenuProps}
        value={selectedCountryCode}
        onChange={(event: any) => {
          setSelectedCountryCode(event.target.value);
          getCountry({ variables: { countryCode: event.target.value } });
        }}
      >
        {data?.countries.map((country: any) => (
          <MenuItem key={country.code} value={country.code}>
            {country.code}
          </MenuItem>
        ))}
      </Select>
      {selectedCountryDetails?.countries.map((country: any) => {
        return <div>{country.name}</div>;
      })}
    </Fragment>
  );
}

export default Countries;
