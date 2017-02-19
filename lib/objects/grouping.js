"use strict";
var tail = require("lodash.tail");
function groupPairs(array) {
    var obj = {};
    var _loop_1 = function (tuple) {
        var key = tuple[0];
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
function groupStringValuePairs(pairs) {
    return groupPairs(pairs);
}
exports.groupStringValuePairs = groupStringValuePairs;
function groupNumberValuePairs(pairs) {
    return groupPairs(pairs);
}
exports.groupNumberValuePairs = groupNumberValuePairs;
//# sourceMappingURL=grouping.js.map