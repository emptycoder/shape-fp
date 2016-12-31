"use strict";
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
exports.ConditionalIo = ConditionalIo;
exports.conditionalIo = function (isSatisifed) { return new ConditionalIo(isSatisifed); };
exports.dontRun = exports.conditionalIo(false);
exports.run = exports.conditionalIo(true);
//# sourceMappingURL=conditional-io.js.map