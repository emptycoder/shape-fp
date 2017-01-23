"use strict";
exports.randomNumber = function (from) { return function (to) {
    return Math.floor(Math.random() * (to - from)) + from;
}; };
exports.nth = function (array, index) {
    return array[index];
};
exports.head = function (array) {
    return exports.nth(array, 0);
};
exports.tail = function (array) {
    return array.slice(1, array.length);
};
exports.randomIndex = function (array) {
    return exports.randomNumber(0)(array.length);
};
exports.randomElement = function (array) {
    return exports.nth(array, exports.randomIndex(array));
};
//# sourceMappingURL=array.js.map