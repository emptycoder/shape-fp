"use strict";
const identity_1 = require("../functions/identity");
class Lazy {
    constructor(g) {
        this.g = g;
    }
    map(f) {
        let fg = () => f(this.g());
        return new Lazy(fg);
    }
    fold(f) {
        return f(this.g());
    }
    get() {
        return this.fold(identity_1.default);
    }
    run(f) {
        f(this.g());
    }
}
exports.Lazy = Lazy;
exports.lazy = (g) => new Lazy(g);
//# sourceMappingURL=lazy.js.map