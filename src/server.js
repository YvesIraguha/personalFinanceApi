import express from "express";
import "@babel/polyfill";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import typeDefs from "./api/schema";
import resolvers from "./api/resolvers";
import models from "../models";

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });
const app = express();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
