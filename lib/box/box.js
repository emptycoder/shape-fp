"use strict";
var Box = (function () {
    function Box(x) {
        this.x = x;
    }
    Box.prototype.map = function (f) {
        return new Box(f(this.x));
    };
    Box.prototype.fold = function (f) {
        return f(this.x);
    };
    Box.prototype.get = function () {
        return this.x;
    };
    Box.prototype.run = function (f) {
        f(this.x);
    };
    Box.prototype.attempt = function (f) {
        return f(this.x);
    };
    return Box;
}());
exports.Box = Box;
exports.box = function (value) { return new Box(value); };
//# sourceMappingURL=box.js.map