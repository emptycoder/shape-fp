"use strict";
var box_1 = require("../box/box");
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
    Some.prototype.isDefined = function () {
        return true;
    };
    Some.prototype.isEmpty = function () {
        return false;
    };
    Some.prototype.run = function (f) {
        f(this.x);
    };
    Some.prototype.box = function (onNone, onSome) {
        return box_1.box(onSome(this.x));
    };
    return Some;
}());
exports.Some = Some;
exports.some = function (value) { return new Some(value); };
