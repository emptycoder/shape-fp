import {entries, StringKeyObject} from '../objects/objects'
import {StringValuePair} from '../objects/pair'

export class Dictionary<V> {

    constructor(private pairs: StringValuePair<V>[]) {

    }

    entries() : StringValuePair<V>[] {

        return this.pairs
    }

    keys() : string[] {

        return this.pairs.map(pair => {

            const [key, _] = pair

            return key

        })

    }

    values() : V[] {

        return this.pairs.map(pair => {

            const [_, value] = pair

            return value

        })

    }

    map<W>(f : (key : string, value : V) => W) : Dictionary<W> {

        return new Dictionary<W>(this.pairs.map(pair => {

            const [key, value] = pair

            return [key, f(key, value)] as [string, W]

        }))

    }

}

export function dictionary<V>(pairs: StringValuePair<V>[]) : Dictionary<V>
export function dictionary<V>(object: StringKeyObject<V>) : Dictionary<V>
export function dictionary<V>(input: StringValuePair<V>[] | StringKeyObject<V>) : Dictionary<V> {

    if (Array.isArray(input)) {

        return new Dictionary(input)

    }
    else {

        return new Dictionary(entries(input))

    }

}