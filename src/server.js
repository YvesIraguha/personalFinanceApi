import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import typeDefs from "./api/schema";
import resolvers from "./api/resolvers";
import models from "../models";
import { OAuth2Client } from "google-auth-library";
import { decodeToken } from "./helpers/createToken";
export const CLIENT_ID = process.env.CLIENT_ID;
export const client = new OAuth2Client(CLIENT_ID);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    const user = await decodeToken(token);
    if (!user) throw new Error("You must be logged in");
    return { models, user };
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
