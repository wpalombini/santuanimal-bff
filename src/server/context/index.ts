const context = ({ event, context, express }: any) => {
  // Get user_id or sub from event.requestContext.authorizer
  // Get email from event.requestContext.authorizer ??
  // Get app correlation id

  const ctx = {
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
    expressRequest: express.req,
  };

  console.log(event.requestContext.authorizer);
  return ctx;
};

export default context;
