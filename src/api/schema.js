import { gql } from "apollo-server-express";

const typeDefs = gql`
type Expense {
    id:String
    type:String
    quantity:Integer
    price:Integer
}
type Query {
    getAllExpenses:[Expense!]!
    getExpense(id:String!):Expense
}

type Mutation {
    createExpense(type:String!,quantity:Integer,price:Integer!):Expense!
}
`

export default typeDefs;