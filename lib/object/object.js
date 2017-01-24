"use strict";
var keys = require("lodash.keys");
//  There is currently no way in TypeScript to specify an object that is “not a primitive”.
exports.entries = function (obj) {
    return keys(obj).map(function (key) { return [key, obj[key]]; });
};
//# sourceMappingURL=object.js.map