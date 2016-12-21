"use strict";
var Success_1 = require('./Success');
var Error_1 = require('./Error');
exports.resultFromCallback = function (errorValue, successValue) {
    if (Error_1.error == null) {
        return Success_1.success(errorValue);
    }
    else {
        return Error_1.error(successValue);
    }
};
