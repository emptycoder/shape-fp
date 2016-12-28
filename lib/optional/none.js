import optional from "./helper";
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
        return optional(x);
    };
    None.prototype.getOrDefault = function (defaultValue) {
        return defaultValue;
    };
    None.prototype.get = function () {
        return null;
    };
    return None;
}());
export { None };
export var none = function () { return new None(); };
