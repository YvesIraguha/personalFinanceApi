import axios from "axios";
import UserController from "../data/users";
import ExpenseController from "../data/expenses";

const resolvers = {
  Query: {
    async getAllExpenses(root, args, { token }) {
      return ExpenseController.getAllExpenses(token);
    },
    async getExpense(root, { id }) {
      return ExpenseController.getExpense(id);
    },
    async getUsers(root) {
      return UserController.getUsers();
    },
    async getUser(root, { id }) {
      return UserController.getUser(id);
    }
  },
  Mutation: {
    async createExpense(root, { type, quantity, price }, { token }) {
      return ExpenseController.createExpense(type, quantity, price, token);
    },
    async deleteExpense(root, { id }, { token }) {
      return ExpenseController.deleteExpense(id, token);
    },
    async updateExpense(root, { id, ...rest }, { token }) {
      return ExpenseController.updateExpense(id, rest, token);
    },
    async createUser(root, { accessToken }) {
      const profileData = await axios.get(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
      );
      return UserController.createUser(profileData);
    }
  },
  Expense: {
    async owner(expense) {
      const user = await expense.getUser();
      return user;
    }
  },
  User: {
    async expenses(user) {
      const expense = await user.getExpenses();
      return expense;
    }
  }
};

export default resolvers;
