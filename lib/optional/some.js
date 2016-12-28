"use strict";
var Some = (function () {
    function Some(x) {
        this.x = x;
    }
    Some.prototype.map = function (f) {
        return new Some(f(this.x));
    };
    Some.prototype.fold = function (onNone, onSome) {
        return onSome(this.x);
    };
    Some.prototype.orElse = function (x) {
        return this;
    };
    Some.prototype.get = function () {
        return this.x;
    };
    Some.prototype.getOrDefault = function (defaultValue) {
        return this.x;
    };
    return Some;
}());
exports.Some = Some;
exports.some = function (value) { return new Some(value); };
