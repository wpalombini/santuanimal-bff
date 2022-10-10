import { ApolloServer } from 'apollo-server-lambda';
import context from './context';
import typeDefs from './schemas';
import resolvers from './resolvers';

const server = new ApolloServer({
  context,
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

export default server;
