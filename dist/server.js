"use strict";

var _express = _interopRequireDefault(require("express"));

require("@babel/polyfill");

var _apolloServerExpress = require("apollo-server-express");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _schema = _interopRequireDefault(require("./api/schema"));

var _resolvers = _interopRequireDefault(require("./api/resolvers"));

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = new _apolloServerExpress.ApolloServer({
  typeDefs: _schema["default"],
  resolvers: _resolvers["default"],
  context: {
    models: _models["default"]
  }
});
var app = (0, _express["default"])();
server.applyMiddleware({
  app: app
});
var PORT = process.env.PORT || 4000;
app.listen({
  port: PORT
}, function () {
  return console.log("\uD83D\uDE80 Server ready at http://localhost:4000".concat(server.graphqlPath));
});
//# sourceMappingURL=server.js.map