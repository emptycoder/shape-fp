"use strict";
var objects_1 = require("../objects/objects");
var list_1 = require("../list/list");
var Dictionary = (function () {
    function Dictionary(obj) {
        this.obj = obj;
    }
    Dictionary.prototype.entries = function () {
        return Object.entries(this.obj);
    };
    Dictionary.prototype.keys = function () {
        return Object.keys(this.obj);
    };
    Dictionary.prototype.values = function () {
        return Object.values(this.obj);
    };
    Dictionary.prototype.map = function (f) {
        return list_1.list(this.entries())
            .map(function (pair) {
            var key = pair[0], value = pair[1];
            return [key, f(key, value)];
        })
            .box(objects_1.toObject)
            .fold(function (obj) {
            return new Dictionary(obj);
        });
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
function dictionary(obj) {
    return new Dictionary(obj);
}
exports.dictionary = dictionary;
//# sourceMappingURL=dictionary.js.map