"use strict";
var Identity_1 = require('./Identity');
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
        return this.fold(Identity_1["default"]);
    };
    Box.prototype.pairBy = function (f) {
        return this.map(function (x) {
            var pair = [x, f(x)];
            return pair;
        });
    };
    Box.prototype.tee = function (f) {
        f(this.x);
        return this;
    };
    return Box;
}());
exports.Box = Box;
exports.box = function (value) { return new Box(value); };
