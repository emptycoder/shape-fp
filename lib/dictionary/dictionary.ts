import {StringKeyObject, toObject} from '../objects/objects'
import {StringValuePair} from '../objects/pair'
import {list} from '../list/list'

export class Dictionary<V> {

    constructor(private obj: StringKeyObject<V>) {

    }

    entries() : StringValuePair<V>[] {

        return Object.entries(this.obj)
    }

    keys() : string[] {

        return Object.keys(this.obj)

    }

    values() : V[] {

        return Object.values(this.obj)

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

}

export function dictionary<V>(obj: StringKeyObject<V>) : Dictionary<V> {

    return new Dictionary(obj)

}