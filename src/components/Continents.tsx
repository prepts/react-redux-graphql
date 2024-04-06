/* eslint-disable @typescript-eslint/no-explicit-any */

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { Fragment, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";

import {
  getAllContinentsQuery,
  getAllCountriesInContinentQuery,
} from "../query";

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

function Continents() {
  const [selectedCountinentCode, setSelectedCountinentCode] = useState("");

  const { data } = useQuery(getAllContinentsQuery);
  const [getCountryDetails, { data: selectedCountryDetails }] = useLazyQuery(
    getAllCountriesInContinentQuery
  );

  return (
    <Fragment>
      <Select
        sx={{ width: "300px" }}
        MenuProps={MenuProps}
        value={selectedCountinentCode}
        onChange={(event: any) => {
          setSelectedCountinentCode(event.target.value);
          getCountryDetails({
            variables: { continentCode: event.target.value },
          });
        }}
      >
        {data?.continents.map((continent: any) => (
          <MenuItem key={continent.code} value={continent.code}>
            {continent.name}
          </MenuItem>
        ))}
      </Select>
      {selectedCountryDetails?.countries.map((country: any) => {
        return <div>{`${country.name} ${country.continent.name}`}</div>;
      })}
    </Fragment>
  );
}

export default Continents;
