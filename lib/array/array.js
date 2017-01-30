"use strict";
exports.randomNumber = function (from) { return function (to) {
    return Math.floor(Math.random() * (to - from)) + from;
}; };
exports.nth = function (array, index) {
    return array[index];
};
exports.randomIndex = function (array) {
    return exports.randomNumber(0)(array.length);
};
exports.randomElement = function (array) {
    return exports.nth(array, exports.randomIndex(array));
};
exports.indexed = function (array) {
    return array.map(function (item, index) { return [item, index]; });
};
//# sourceMappingURL=array.js.map