"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _users = _interopRequireDefault(require("../data/users"));

var _expenses = _interopRequireDefault(require("../data/expenses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resolvers = {
  Query: {
    async getAllExpenses(root, args, {
      token
    }) {
      return _expenses.default.getAllExpenses(token);
    },

    async getExpense(root, {
      id
    }) {
      return _expenses.default.getExpense(id);
    },

    async getUsers(root) {
      return _users.default.getUsers();
    },

    async getUser(root, {
      id
    }) {
      return _users.default.getUser(id);
    }

  },
  Mutation: {
    async createExpense(root, {
      type,
      quantity,
      price
    }, {
      token
    }) {
      return _expenses.default.createExpense(type, quantity, price, token);
    },

    async deleteExpense(root, {
      id
    }, {
      token
    }) {
      return _expenses.default.deleteExpense(id, token);
    },

    async updateExpense(root, {
      id,
      ...rest
    }, {
      token
    }) {
      return _expenses.default.updateExpense(id, rest, token);
    },

    async createUser(root, {
      accessToken
    }) {
      const profileData = await _axios.default.get("https://www.googleapis.com/userinfo/v2/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      return _users.default.createUser(profileData);
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
var _default = resolvers;
exports.default = _default;
//# sourceMappingURL=index.js.map