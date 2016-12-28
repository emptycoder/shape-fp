"use strict";
var Success = (function () {
    function Success(x) {
        this.success = x;
    }
    Success.prototype.map = function (f) {
        return new Success(f(this.success));
    };
    Success.prototype.fold = function (onError, onSuccess) {
        return onSuccess(this.success);
    };
    return Success;
}());
exports.Success = Success;
exports.success = function (success) { return new Success(success); };
