"use strict";
const identity_1 = require("../functions/identity");
class Box {
    constructor(x) {
        this.x = x;
    }
    map(f) {
        return new Box(f(this.x));
    }
    fold(f) {
        return f(this.x);
    }
    get() {
        return this.fold(identity_1.default);
    }
    run(f) {
        f(this.x);
    }
    attempt(f) {
        return f(this.x);
    }
}
exports.Box = Box;
exports.box = (value) => new Box(value);
//# sourceMappingURL=box.js.map