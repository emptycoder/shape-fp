"use strict";
function entries(obj) {
    return Object.keys(obj).map(function (key) {
        return [key, obj[key]];
    });
}
exports.entries = entries;
function toObject(entries) {
    var obj = {};
    entries.forEach(function (entry) {
        var key = entry[0], value = entry[1];
        obj[key] = value;
    });
    return obj;
}
exports.toObject = toObject;
//# sourceMappingURL=object.js.map