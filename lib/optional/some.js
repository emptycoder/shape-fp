"use strict";
var Some = (function () {
    function Some(x) {
        this.x = x;
    }
    Some.prototype.map = function (f) {
        return new Some(f(this.x));
    };
    Some.prototype.run = function (onSome, onNone) {
        onSome(this.x);
    };
    return Some;
}());
exports.Some = Some;
exports.some = function (value) { return new Some(value); };
