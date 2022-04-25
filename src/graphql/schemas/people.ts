import { gql } from "apollo-server-express";

export default gql`
  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }

  type PeoplePaginated {
    persons: [Person]
    count: Int
    next: String
    previous: String
  }

  type Query {
    people(page: Int!): PeoplePaginated!
    searchPerson(name: String!): PeoplePaginated!
  }
`;
