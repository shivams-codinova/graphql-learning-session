import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphQL/schema.js";
import { createContext } from "./graphQL/createContext.js"
import { createServices } from "./services/createServices.js"

const server = new ApolloServer({ schema });
const services = createServices();

startStandaloneServer(server, {
  listen: { port: 8000 },
  async context() {
    return createContext(services);
  },
}).then(({ url }) => console.log(`server is running at ${url}`));
