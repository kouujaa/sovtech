// register env variables here with 1:1 .env
// this will allow to fetch env variables from other places
const ENVIRONMENT_VARIABLES = {
  api_url: process.env.API_URL,
  api_base_url: process.env.API_BASE_URL,
  api_full_uri: process.env.API_URL + process.env.API_BASE_URL,
  gql_pg: process.env.GQL_PLAYGROUND,
  node_env: process.env.NODE_ENV || "development",
  server_port: process.env.PORT,
};

export const env = (key: keyof typeof ENVIRONMENT_VARIABLES) => {
  return ENVIRONMENT_VARIABLES[key];
};
