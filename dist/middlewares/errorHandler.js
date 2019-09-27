"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const errorHandler = async (callback, ...data) => {
  try {
    await callback(...data);
  } catch (error) {
    throw new Error("Ooops something is not working properly over here");
  }
};

var _default = errorHandler;
exports.default = _default;
//# sourceMappingURL=errorHandler.js.map