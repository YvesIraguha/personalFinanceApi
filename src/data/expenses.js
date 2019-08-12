import models from "../../models";
import { decodeToken } from "../helpers/authentication";

class ExpenseController {
  static async getExpense(id) {
    const expense = await models.Expense.findOne({
      where: { id }
    });
    return expense;
  }
  static async getAllExpenses(token) {
    const user = await decodeToken(token);
    const { id: userId } = user;
    const expenses = await models.Expense.findAll({ where: { userId } });
    return expenses;
  }

  static async createExpense(type, quantity, price, token) {
    const user = await decodeToken(token);
    if (!user) throw new Error("You should be logged in");
    const { id: userId } = user;
    return models.Expense.create({
      type,
      quantity,
      price,
      userId
    });
  }
  static async deleteExpense(id, token) {
    const user = await decodeToken(token);
    if (!user) throw new Error("You should be logged in");
    const { id: userId } = user;
    const deleted = await models.Expense.destroy({
      where: { id, userId },
      returning: true
    });
    return deleted;
  }

  static async updateExpense(id, rest, token) {
    const user = await decodeToken(token);
    if (!user) throw new Error("You should be logged in");
    const { id: userId } = user;
    const updated = await models.Expense.update(rest, {
      where: { id, userId },
      returning: true
    });
    return updated[1][0];
  }
}

export default ExpenseController;
