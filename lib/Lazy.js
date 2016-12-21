"use strict";
var Identity_1 = require('./Identity');
var Lazy = (function () {
    function Lazy(g) {
        this.g = g;
    }
    Lazy.prototype.map = function (f) {
        var _this = this;
        var fg = function () { return f(_this.g()); };
        return new Lazy(fg);
    };
    Lazy.prototype.fold = function (f) {
        return f(this.g());
    };
    Lazy.prototype.get = function () {
        return this.fold(Identity_1["default"]);
    };
    Lazy.prototype.pairBy = function (f) {
        return this.map(function (x) {
            var pair = [x, f(x)];
            return pair;
        });
    };
    return Lazy;
}());
exports.Lazy = Lazy;
exports.lazy = function (g) { return new Lazy(g); };