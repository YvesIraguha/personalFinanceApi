import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import typeDefs from "./schemas";
import resolvers from "./resolvers";
import models from "../models";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    return { models, token };
  },
  introspection: true,
  playground: true
});
const app = express();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
