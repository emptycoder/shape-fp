"use strict";
const none_1 = require("./none");
const some_1 = require("./some");
const optional = (value) => value === null ? none_1.none() : some_1.some(value);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = optional;
//# sourceMappingURL=helper.js.map