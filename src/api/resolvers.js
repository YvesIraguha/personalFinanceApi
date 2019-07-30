const resolvers = {
    Query:{
        async getAllExpenses(root,args,{models}){
            return models.Expense.findAll()
        },
        async  getExpense(root,{id},{models}){
            return models.Expense.findById(id)
        }
    
    },
    Mutation:{
        async createExpense(root,{type,quantity,price},{models}){
        return models.Expense.create({
            type,quantity,price
        })
        }
    }
}