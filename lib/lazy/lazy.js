"use strict";
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
        return this.g();
    };
    Lazy.prototype.run = function (f) {
        f(this.g());
    };
    return Lazy;
}());
exports.Lazy = Lazy;
function lazy(g) {
    return new Lazy(g);
}
exports.lazy = lazy;
//# sourceMappingURL=lazy.js.map