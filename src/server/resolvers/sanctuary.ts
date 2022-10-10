const sanctuaryResolver = {
  Query: {
    hello: (_parent: unknown, { what }: any, context: unknown) =>
      `Hello ${what}! At ${new Date().toLocaleString('en-AU')}`,
  },
};

export default sanctuaryResolver;
