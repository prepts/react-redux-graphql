import { gql } from "@apollo/client";

export const getContriesQuery = gql`
  query getContries () {
    contries {
      name
      code
    }
  }
`;
