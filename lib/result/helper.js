"use strict";
const success_1 = require("./success");
const failure_1 = require("./failure");
function tryCatch(f) {
    try {
        return success_1.success(f());
    }
    catch (ex) {
        return failure_1.failure(ex);
    }
}
exports.tryCatch = tryCatch;
//# sourceMappingURL=helper.js.map