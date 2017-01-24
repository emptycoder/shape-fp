import keys = require('lodash.keys')

export const entries = <T, R>(obj : T) : [string, R][] =>

    keys(obj).map(key => [key, obj[key]])