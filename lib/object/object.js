"use strict";
//  There is currently no way in TypeScript to specify an object that is “not a primitive”.
function entries(obj) {
    return Object.keys(obj).map(function (key) { return [key, obj[key]]; });
}
exports.entries = entries;
function mapValues(input, f) {
    var newObject = {};
    for (var _i = 0, _a = Object.keys(input); _i < _a.length; _i++) {
        var key = _a[_i];
        newObject[key] = f(input[key]);
    }
    return newObject;
}
exports.mapValues = mapValues;
//# sourceMappingURL=object.js.map