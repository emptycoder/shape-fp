"use strict";
var none_1 = require("./none");
var some_1 = require("./some");
var isNil = require("lodash.isnil");
function optional(value) {
    return isNil(value) ? none_1.none() : some_1.some(value);
}
exports.optional = optional;
//# sourceMappingURL=optional.js.map