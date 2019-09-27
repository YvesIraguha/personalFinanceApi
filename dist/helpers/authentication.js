"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeToken = exports.createJwtToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createJwtToken = async payload => {
  try {
    const secretKey = process.env.SECRET_KEY;
    const token = await _jsonwebtoken.default.sign(payload, secretKey, {
      algorithm: "HS256"
    });
    return token;
  } catch (error) {
    throw new Error("error is happening over");
  }
};

exports.createJwtToken = createJwtToken;

const decodeToken = async token => {
  try {
    const secretKey = process.env.SECRET_KEY;
    const decoded = await _jsonwebtoken.default.verify(token, secretKey);
    return decoded;
  } catch (error) {
    throw new Error("We are unable to authenticate you");
  }
};

exports.decodeToken = decodeToken;
//# sourceMappingURL=authentication.js.map