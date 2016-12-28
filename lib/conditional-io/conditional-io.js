var ConditionalIo = (function () {
    function ConditionalIo(isSatisifed) {
        this.isSatisfied = isSatisifed;
    }
    ConditionalIo.prototype.run = function (f) {
        if (this.isSatisfied) {
            f();
        }
    };
    return ConditionalIo;
}());
export { ConditionalIo };
export var conditionalIo = function (isSatisifed) { return new ConditionalIo(isSatisifed); };
export var dontRun = conditionalIo(false);
export var run = conditionalIo(true);
