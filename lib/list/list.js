"use strict";
var List = (function () {
    function List(xs) {
        this.xs = xs;
    }
    List.prototype.map = function (f) {
        return new List(this.xs.map(f));
    };
    List.prototype.chain = function (f) {
        return f(this.xs);
    };
    List.prototype.fold = function (f) {
        return this.xs.map(f);
    };
    List.prototype.get = function () {
        return this.xs;
    };
    List.prototype.run = function (f) {
        this.xs.forEach(f);
    };
    return List;
}());
exports.List = List;
exports.list = function (array) { return new List(array); };
//# sourceMappingURL=list.js.map