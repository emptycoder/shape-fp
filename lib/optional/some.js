"use strict";
class Some {
    constructor(x) {
        this.x = x;
    }
    map(f) {
        return new Some(f(this.x));
    }
    fold(onNone, onSome) {
        return onSome(this.x);
    }
    orElse(x) {
        return this;
    }
    get() {
        return this.x;
    }
    getOrDefault(defaultValue) {
        return this.x;
    }
}
exports.Some = Some;
exports.some = (value) => new Some(value);
//# sourceMappingURL=some.js.map