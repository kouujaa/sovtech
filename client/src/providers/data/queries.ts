import { gql } from "@apollo/client";

export const GET_PEOPLE = gql`
  query People($page: Int!) {
    people(page: $page) {
      persons {
        name
        height
        mass
        gender
        homeworld
      }
      count
      next
      previous
    }
  }
`;

export const SEARCH_PEOPLE = gql`
  query SearchPerson($name: String!) {
    searchPerson(name: $name) {
      persons {
        name
        height
        mass
        gender
        homeworld
      }
      count
      next
      previous
    }
  }
`;
