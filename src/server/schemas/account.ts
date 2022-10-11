import { gql } from 'apollo-server-lambda';

const accountTypeDef = gql`
  type AccountDetailsResponse {
    accountId: String!
    accountName: String!
    sanctuaryId: String!
    sanctuaryName: String!
  }

  type Query {
    getAccountDetails(id: String!): AccountDetailsResponse
  }
`;

export default accountTypeDef;
