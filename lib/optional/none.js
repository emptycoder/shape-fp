"use strict";
const helper_1 = require("./helper");
class None {
    constructor() {
    }
    map(f) {
        return exports.none();
    }
    fold(onNone, onSome) {
        return onNone();
    }
    orElse(x) {
        return helper_1.default(x);
    }
    getOrDefault(defaultValue) {
        return defaultValue;
    }
    get() {
        return null;
    }
}
exports.None = None;
exports.none = () => new None();
//# sourceMappingURL=none.js.map