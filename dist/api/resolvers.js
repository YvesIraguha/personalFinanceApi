"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var resolvers = {
  Query: {
    getAllExpenses: function () {
      var _getAllExpenses = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(root, args, _ref) {
        var models;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                models = _ref.models;
                return _context.abrupt("return", models.Expense.findAll());

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getAllExpenses(_x, _x2, _x3) {
        return _getAllExpenses.apply(this, arguments);
      }

      return getAllExpenses;
    }(),
    getExpense: function () {
      var _getExpense = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(root, _ref2, _ref3) {
        var id, models;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref2.id;
                models = _ref3.models;
                return _context2.abrupt("return", models.Expense.findOne({
                  where: {
                    id: id
                  }
                }));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getExpense(_x4, _x5, _x6) {
        return _getExpense.apply(this, arguments);
      }

      return getExpense;
    }()
  },
  Mutation: {
    createExpense: function () {
      var _createExpense = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(root, _ref4, _ref5) {
        var type, quantity, price, models;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                type = _ref4.type, quantity = _ref4.quantity, price = _ref4.price;
                models = _ref5.models;
                return _context3.abrupt("return", models.Expense.create({
                  type: type,
                  quantity: quantity,
                  price: price
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function createExpense(_x7, _x8, _x9) {
        return _createExpense.apply(this, arguments);
      }

      return createExpense;
    }()
  }
};
var _default = resolvers;
exports["default"] = _default;
//# sourceMappingURL=resolvers.js.map