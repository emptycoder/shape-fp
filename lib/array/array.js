"use strict";
exports.randomNumber = (from) => (to) => Math.floor(Math.random() * (to - from)) + from;
exports.nth = (array, index) => array[index];
exports.randomIndex = (array) => exports.randomNumber(0)(array.length);
exports.randomElement = (array) => exports.nth(array, exports.randomIndex(array));
//# sourceMappingURL=array.js.map