import {none} from './none'
import {some} from './some'
import Optional from './optional'
import isNil = require('lodash.isnil')

const optional = <X>(value: X | null) : Optional<X> =>

    isNil(value) ? none<X>() : some(value)

export default optional