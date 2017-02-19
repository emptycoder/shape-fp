"use strict";
var tail = require("lodash.tail");
function entries(obj) {
    return Object.keys(obj).map(function (key) {
        return [key, obj[key]];
    });
}
exports.entries = entries;
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
//# sourceMappingURL=object.js.map