"use strict";
var box_1 = require("../box/box");
var optional_1 = require("./optional");
var None = (function () {
    function None() {
    }
    None.prototype.map = function (f) {
        return none();
    };
    None.prototype.fold = function (onNone, onSome) {
        return onNone();
    };
    None.prototype.orElse = function (x) {
        return optional_1.optional(x);
    };
    None.prototype.getOrDefault = function (defaultValue) {
        return defaultValue;
    };
    None.prototype.get = function () {
        return null;
    };
    None.prototype.isDefined = function () {
        return false;
    };
    None.prototype.isEmpty = function () {
        return true;
    };
    None.prototype.run = function (f) {
    };
    None.prototype.box = function (onNone, onSome) {
        return box_1.box(onNone());
    };
    return None;
}());
exports.None = None;
function none() {
    return new None();
}
exports.none = none;
//# sourceMappingURL=none.js.map