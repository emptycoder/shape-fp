"use strict";
var helper_1 = require("./helper");
var None = (function () {
    function None() {
    }
    None.prototype.map = function (f) {
        return exports.none();
    };
    None.prototype.fold = function (onNone, onSome) {
        return onNone();
    };
    None.prototype.orElse = function (x) {
        return helper_1.default(x);
    };
    None.prototype.getOrDefault = function (defaultValue) {
        return defaultValue;
    };
    None.prototype.get = function () {
        return null;
    };
    return None;
}());
exports.None = None;
exports.none = function () { return new None(); };
