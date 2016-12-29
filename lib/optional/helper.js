"use strict";
var none_1 = require("./none");
var some_1 = require("./some");
var optional = function (value) {
    return value === null ? none_1.none() : some_1.some(value);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = optional;
//# sourceMappingURL=helper.js.map