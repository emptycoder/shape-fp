import identity from '../identity/identity';
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
        return this.fold(identity);
    };
    Box.prototype.run = function (f) {
        f(this.x);
    };
    return Box;
}());
export { Box };
export var box = function (value) { return new Box(value); };
