import identity from '../identity/identity';
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
        return this.fold(identity);
    };
    Lazy.prototype.run = function (f) {
        f(this.g());
    };
    return Lazy;
}());
export { Lazy };
export var lazy = function (g) { return new Lazy(g); };
