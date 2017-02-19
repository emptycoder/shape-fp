"use strict";
var objects_1 = require("../objects/objects");
var Dictionary = (function () {
    function Dictionary(pairs) {
        this.pairs = pairs;
    }
    Dictionary.prototype.entries = function () {
        return this.pairs;
    };
    Dictionary.prototype.keys = function () {
        return this.pairs.map(function (pair) {
            var key = pair[0], _ = pair[1];
            return key;
        });
    };
    Dictionary.prototype.values = function () {
        return this.pairs.map(function (pair) {
            var _ = pair[0], value = pair[1];
            return value;
        });
    };
    Dictionary.prototype.map = function (f) {
        return new Dictionary(this.pairs.map(function (pair) {
            var key = pair[0], value = pair[1];
            return [key, f(key, value)];
        }));
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
function dictionary(input) {
    if (Array.isArray(input)) {
        return new Dictionary(input);
    }
    else {
        return new Dictionary(objects_1.entries(input));
    }
}
exports.dictionary = dictionary;
//# sourceMappingURL=dictionary.js.map