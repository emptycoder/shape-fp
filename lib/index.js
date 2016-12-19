"use strict";
var Box = (function () {
    function Box(value) {
        this.x = value;
    }
    Box.prototype.map = function (f) {
        return new Box(f(this.x));
    };
    Box.prototype.fold = function (f) {
        return f(this.x);
    };
    Box.prototype.pairBy = function (f) {
        return this.map(function (x) {
            var pair = [x, f(x)];
            return pair;
        });
    };
    return Box;
}());
exports.Box = Box;
exports.box = function (value) { return new Box(value); };
