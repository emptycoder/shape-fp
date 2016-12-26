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
export { None };
export var none = function () { return new None(); };
