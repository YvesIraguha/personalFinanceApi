import axios from "axios";
import UserController from "../data/users";
import ExpenseController from "../data/expenses";
import InvestmentController from "../data/investments";

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
    },
    async getAllInvestments(root, args, { token }) {
      return InvestmentController.getAllInvestments(token);
    },
    async getInvestment(root, { id }) {
      return InvestmentController.getInvestment(id);
    }
  },
  Mutation: {
    async createExpense(root, { type, quantity, price, parentId }, { token }) {
      return ExpenseController.createExpense(type, quantity, price, parentId, token);
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
    },
    async createInvestment(
      root,
      { name, matureDate, initialAmount, targetAmount, pictureUrl },
      { token }
    ) {
      return InvestmentController.createInvestment(
        name,
        matureDate,
        initialAmount,
        targetAmount,
        pictureUrl,
        token
      );
    },
    async deleteInvestment(root, { id }, { token }) {
      return InvestmentController.deleteInvestment(id, token);
    },
    async updateInvestment(root, { id, ...rest }, { token }) {
      return InvestmentController.updateInvestment(id, rest, token);
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
    },
    async investments(user) {
      const investmentList = await user.getInvestments();
      return investmentList;
    }
  },
  Investment: {
    async owner(investment) {
      const user = await investment.getUser();
      return user;
    },
    async expenses(investment) {
      const expenseList = await investment.getExpenses();
      return expenseList;
    }
  }
};

export default resolvers;
