import tail = require('lodash.tail')

export type Entry<V> = [string, V]

export interface StringKeyObject<V> {

    [index: string]: V

}

export function entries<V>(obj : StringKeyObject<V>) : Entry<V>[] {

    return Object.keys(obj).map(key =>

        [ key, obj[key] ] as [string, V]

    )
}

export function toObject<V>(entries : Entry<V>[]) : StringKeyObject<V> {

    const obj = {}

    entries.forEach(entry => {

        const [key, value] = entry

        obj[key] = value

    })

    return obj

}

export function groupPairsByFirst<A, B>(array : [string, B][]) : StringKeyObject<B[]> {

    const obj = {}

    for(const tuple of array) {

        const key = tuple[0].toString()

        if(!obj.hasOwnProperty(key)) {
            obj[key] = []
        }

        tail(tuple).forEach(item =>

            obj[key].push(item)

        )

    }

    return obj

}