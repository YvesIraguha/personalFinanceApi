const resolvers = {
  Query: {
    async getAllExpenses(root, args, { models }) {
      return models.Expense.findAll();
    },
    async getExpense(root, { id }, { models }) {
      return models.Expense.findOne({ where: { id } });
    }
  },
  Mutation: {
    async createExpense(root, { type, quantity, price }, { models }) {
      return models.Expense.create({
        type,
        quantity,
        price
      });
    },
    async deleteExpense(root, { id }, { models }) {
      const deleted = await models.Expense.destroy({
        where: { id },
        returning: true
      });
      return deleted;
    },
    async updateExpense(root, { id, ...rest }, { models }) {
      const updated = await models.Expense.update(rest, {
        where: { id },
        returning: true
      });
      return updated[1][0].dataValues;
    }
  }
};

export default resolvers;
