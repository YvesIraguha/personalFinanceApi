import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Expense {
    id: String
    createdAt: String
    type: String
    quantity: Int
    price: Int
    owner: User
    parentId: String
  }
  type Investment {
    id: String
    createdAt: String
    matureDate: String
    pictureUrl: String
    status: String
    name: String
    initialAmount: Int
    targetAmount: Int
    expenses: [Expense]
    owner: User
  }
  type User {
    id: String
    email: String
    createdAt: String
    firstName: String
    lastName: String
    profilePictureUrl: String
    expenses: [Expense]
    investments: [Investment]
  }
  type Token {
    token: String
  }
  type Query {
    getAllExpenses: [Expense!]!
    getExpense(id: String!): Expense
    getUsers: [User]
    getUser(id: String!): User
    getAllInvestments(startDate: String, endDate: String): [Investment!]!
    getInvestment(id: String!): Investment
  }

  type Mutation {
    createExpense(
      type: String!
      quantity: Int
      price: Int!
      parentId: String
    ): Expense!
    deleteExpense(id: String!): Expense
    updateExpense(id: String!, type: String, quantity: Int, price: Int): Expense
    createUser(accessToken: String): Token!
    createInvestment(
      name: String!
      pictureUrl: String
      matureDate: String!
      initialAmount: Int!
      targetAmount: Int!
    ): Investment!
    deleteInvestment(id: String!): Investment
    updateInvestment(
      id: String!
      name: String
      matureDate: String
      initialAmount: Int
      targetAmount: Int
      status: String
    ): Investment
  }
`;

export default typeDefs;
