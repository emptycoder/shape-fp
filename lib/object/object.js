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
        newObject[key] = f(key, input[key]);
    }
    return newObject;
}
exports.mapValues = mapValues;
function fromPairs(pairs) {
    var obj = {};
    pairs
        .forEach(function (pair) {
        var key = pair[0], value = pair[1];
        obj[key] = value;
    });
    return obj;
}
exports.fromPairs = fromPairs;
//# sourceMappingURL=object.js.map