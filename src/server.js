import express from "express"
import { ApolloServer } from 'apollo-server-express';
import typeDefs from "./api/schema";
import resolvers from "./api/resolvers";
import models from "../models"

const server = new ApolloServer({typeDefs,resolvers,context:{models}})
const app = express()
server.applyMiddleware({app})

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))
