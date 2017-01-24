import keys = require('lodash.keys')

export const entries = <R>(obj : Object) : [string, R][] =>

    keys(obj).map(key => [key, obj[key]])