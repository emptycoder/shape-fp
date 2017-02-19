import {StringKeyObject, toObject} from '../objects/objects'
import {StringValuePair} from '../objects/pair'
import {list} from '../list/list'
import pick = require ('lodash.pick')
import values = require ('lodash.values')
import toPairs = require ('lodash.topairs')

export class Dictionary<V> {

    constructor(private obj: StringKeyObject<V>) {

    }

    entries() : StringValuePair<V>[] {

        return toPairs(this.obj) as StringValuePair<V>[]

    }

    keys() : string[] {

        return Object.keys(this.obj)

    }

    values() : V[] {

        return values(this.obj)

    }

    map<W>(f : (key : string, value : V) => W) : Dictionary<W> {

        return list(this.entries())
            .map(pair => {

                const [key, value] = pair

                return [ key, f(key, value) ] as StringValuePair<W>

            })
            .box(toObject)
            .fold(obj =>

                new Dictionary(obj)
            )

    }

    fold<W>(f : (key : string, value : V) => W) : StringKeyObject<W> {

        return list(this.entries())
            .map(pair => {

                const [key, value] = pair

                return [ key, f(key, value) ] as StringValuePair<W>

            })
            .flatten(toObject)

    }

    pick(...keys : string[]) : Dictionary<V> {

        return dictionary(pick(this.obj, keys) as StringKeyObject<V>)

    }

    get() : StringKeyObject<V> {

        return this.obj

    }

}

export function dictionary<V>(obj: StringKeyObject<V>) : Dictionary<V> {

    return new Dictionary(obj)

}