"use strict";
var None = (function () {
    function None() {
    }
    None.prototype.map = function (f) {
        return this;
    };
    None.prototype.run = function (onSome, onNone) {
        onNone();
    };
    return None;
}());
exports.None = None;
exports.none = function () { return new None(); };
