"use strict";
var forward = function (f, g) {
    return function (x) { return g(f(x)); };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = forward;
//# sourceMappingURL=forward.js.map