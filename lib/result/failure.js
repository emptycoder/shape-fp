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
export { Failure };
export var failure = function (error) { return new Failure(error); };
