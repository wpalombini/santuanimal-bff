import * as dotenv from 'dotenv';
dotenv.config();

export const handler = async (event: unknown) => {
  const currentDate = new Date().toLocaleString('en-AU');

  return {
    statusCode: 200,
    body: JSON.stringify({
      appUrl: process.env.APP_BASE_URL,
      env: process.env.ENVIRONMENT,
      message: `Hello from local lambda at ${currentDate}`,
      event,
    }),
  };
};