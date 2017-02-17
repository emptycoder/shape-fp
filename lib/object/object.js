"use strict";
var tail = require("lodash.tail");
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
function groupPairsByFirst(array) {
    var obj = {};
    var _loop_1 = function (tuple) {
        var key = tuple[0].toString();
        if (!obj.hasOwnProperty(key)) {
            obj[key] = [];
        }
        tail(tuple).forEach(function (item) {
            return obj[key].push(item);
        });
    };
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var tuple = array_1[_i];
        _loop_1(tuple);
    }
    return obj;
}
exports.groupPairsByFirst = groupPairsByFirst;
