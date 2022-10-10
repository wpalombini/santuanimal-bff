import { gql } from 'apollo-server-lambda';

const sanctuaryTypeDef = gql`
  type Query {
    hello(what: String!): String
  }
`;

export default sanctuaryTypeDef;
