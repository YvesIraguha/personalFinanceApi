import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Expense {
    id: String
    type: String
    quantity: Int
    price: Int
    owner: User
  }
  type User {
    id: String
    email: String
    firstName: String
    lastName: String
    expenses: [Expense]
  }
  type Token {
    token: String
  }
  type Query {
    getAllExpenses: [Expense!]!
    getExpense(id: String!): Expense
    getUsers: [User]
    getUser(id: String!): User
  }

  type Mutation {
    createExpense(type: String!, quantity: Int, price: Int!): Expense!
    deleteExpense(id: String!): Expense
    updateExpense(id: String!, type: String, quantity: Int, price: Int): Expense
    createUser(accessToken: String): Token!
  }
`;

export default typeDefs;
