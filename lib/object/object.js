"use strict";
//  There is currently no way in TypeScript to specify an object that is “not a primitive”.
exports.entries = function (obj) {
    return Object.keys(obj).map(function (key) { return [key, obj[key]]; });
};
//# sourceMappingURL=object.js.map