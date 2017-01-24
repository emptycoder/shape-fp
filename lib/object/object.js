"use strict";
var keys = require("lodash.keys");
exports.entries = function (obj) {
    return keys(obj).map(function (key) { return [key, obj[key]]; });
};
//# sourceMappingURL=object.js.map