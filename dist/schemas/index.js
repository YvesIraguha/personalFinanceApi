"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

const typeDefs = _apolloServerExpress.gql`
  type Expense {
    id: String
    createdAt: String
    type: String
    quantity: Int
    price: Int
    owner: User
  }
  type User {
    id: String
    email: String
    createdAt: String
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
var _default = typeDefs;
exports.default = _default;
//# sourceMappingURL=index.js.map