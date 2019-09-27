"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../../models"));

var _authentication = require("../helpers/authentication");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserController {
  static async getUser(id) {
    const user = await _models.default.User.findOne({
      where: {
        id
      }
    });
    return user;
  }

  static async getUsers() {
    const users = await _models.default.User.findAll();
    return users;
  }

  static async createUser({
    data
  }) {
    const {
      id,
      email,
      family_name: firstName,
      given_name: lastName
    } = data;
    const user = await _models.default.User.findOne({
      where: {
        id
      }
    });

    if (!user) {
      const newUser = await _models.default.User.create({
        id,
        email,
        firstName,
        lastName
      });
      const token = await (0, _authentication.createJwtToken)(newUser.dataValues);
      return {
        token
      };
    }

    const token = await (0, _authentication.createJwtToken)(user.dataValues);
    return {
      token
    };
  }

}

var _default = UserController;
exports.default = _default;
//# sourceMappingURL=users.js.map