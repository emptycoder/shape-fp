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
export { Success };
export var success = function (success) { return new Success(success); };
