"use strict";
var Error = (function () {
    function Error(x) {
        this.error = x;
    }
    Error.prototype.map = function (f) {
        return new Error(this.error);
    };
    Error.prototype.fold = function (onError, onSuccess) {
        return onError(this.error);
    };
    Error.prototype.pairBy = function (f) {
        return new Error(this.error);
    };
    return Error;
}());
exports.Error = Error;
exports.error = function (error) { return new Error(error); };
