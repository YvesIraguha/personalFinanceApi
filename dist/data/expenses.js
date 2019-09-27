"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../../models"));

var _authentication = require("../helpers/authentication");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExpenseController {
  static async getExpense(id) {
    const expense = await _models.default.Expense.findOne({
      where: {
        id
      }
    });
    return expense;
  }

  static async getAllExpenses(token) {
    const user = await (0, _authentication.decodeToken)(token);
    const {
      id: userId
    } = user;
    const expenses = await _models.default.Expense.findAll({
      where: {
        userId
      }
    });
    return expenses;
  }

  static async createExpense(type, quantity, price, token) {
    const user = await (0, _authentication.decodeToken)(token);
    if (!user) throw new Error("You should be logged in");
    const {
      id: userId
    } = user;
    return _models.default.Expense.create({
      type,
      quantity,
      price,
      userId
    });
  }

  static async deleteExpense(id, token) {
    const user = await (0, _authentication.decodeToken)(token);
    if (!user) throw new Error("You should be logged in");
    const {
      id: userId
    } = user;
    const deleted = await _models.default.Expense.destroy({
      where: {
        id,
        userId
      },
      returning: true
    });
    return deleted;
  }

  static async updateExpense(id, rest, token) {
    const user = await (0, _authentication.decodeToken)(token);
    if (!user) throw new Error("You should be logged in");
    const {
      id: userId
    } = user;
    const updated = await _models.default.Expense.update(rest, {
      where: {
        id,
        userId
      },
      returning: true
    });
    return updated[1][0];
  }

}

var _default = ExpenseController;
exports.default = _default;
//# sourceMappingURL=expenses.js.map