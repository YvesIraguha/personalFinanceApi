"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServerExpress = require("apollo-server-express");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ntype Expense {\n    id:String\n    type:String\n    quantity:Int\n    price:Int\n}\ntype Query {\n    getAllExpenses:[Expense!]!\n    getExpense(id:String!):Expense\n}\n\ntype Mutation {\n    createExpense(type:String!,quantity:Int,price:Int!):Expense!\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = (0, _apolloServerExpress.gql)(_templateObject());
var _default = typeDefs;
exports["default"] = _default;
//# sourceMappingURL=schema.js.map