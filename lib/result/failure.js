"use strict";
var Failure = (function () {
    function Failure(x) {
        this.failure = x;
    }
    Failure.prototype.map = function (f) {
        return new Failure(this.failure);
    };
    Failure.prototype.fold = function (onError, onSuccess) {
        return onError(this.failure);
    };
    return Failure;
}());
exports.Failure = Failure;
exports.failure = function (error) { return new Failure(error); };
