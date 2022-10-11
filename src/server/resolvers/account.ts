const accountResolver = {
  Query: {
    getAccountDetails: (_parent: unknown, { id }: any, context: unknown) => ({
      accountId: id,
      accountName: 'Test Account',
      sanctuaryId: '123',
      sanctuaryName: 'My Sanctuary',
    }),
  },
};

export default accountResolver;
