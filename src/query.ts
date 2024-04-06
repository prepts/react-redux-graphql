import { gql } from "@apollo/client";

export const getAllCountriesQuery = gql`
  query {
    countries {
      name
      code
    }
  }
`;

export const getCountryQuery = gql`
  query ($countryCode: String) {
    countries(filter: { code: { eq: $countryCode } }) {
      name
      code
    }
  }
`;

export const getAllContinentsQuery = gql`
  query {
    continents {
      name
      code
    }
  }
`;

export const getAllCountriesInContinentQuery = gql`
  query ($continentCode: String) {
    countries(filter: { continent: { eq: $continentCode } }) {
      name
      code
      continent {
        name
        code
      }
    }
  }
`;
