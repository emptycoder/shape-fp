"use strict";
class ConditionalIo {
    constructor(isSatisifed) {
        this.isSatisfied = isSatisifed;
    }
    run(f) {
        if (this.isSatisfied) {
            f();
        }
    }
}
exports.ConditionalIo = ConditionalIo;
exports.conditionalIo = (isSatisifed) => new ConditionalIo(isSatisifed);
exports.dontRun = exports.conditionalIo(false);
exports.run = exports.conditionalIo(true);
//# sourceMappingURL=conditional-io.js.map