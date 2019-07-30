import { gql } from "apollo-server-express";

const typeDefs = gql`
type Expense {
    id:String
    type:String
    quantity:Int
    price:Int
}
type Query {
    getAllExpenses:[Expense!]!
    getExpense(id:String!):Expense
}

type Mutation {
    createExpense(type:String!,quantity:Int,price:Int!):Expense!
}
`

export default typeDefs;
