import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphQL/schema.js";

const server = new ApolloServer({ schema });

startStandaloneServer(server, { listen: { port: 8000 } }).then(({ url }) =>
  console.log(`server is running at ${url}`)
);
