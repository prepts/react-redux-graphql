import { gql } from "@apollo/client";

export const getContriesQuery = gql`
  query getCountries {
    countries {
      name
      code
    }
  }
`;
