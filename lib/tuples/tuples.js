"use strict";
var tail = require("lodash.tail");
exports.nth = function (array, index) {
    return array[index];
};
exports.indexed = function (array) {
    return array.map(function (item, index) { return [item, index]; });
};
function groupByFirst(array) {
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
exports.groupByFirst = groupByFirst;
//# sourceMappingURL=tuples.js.map