import {StringValuePair} from '../pairs/pairs'

export type StringKeyObject<V> = {

    [index: string]: V

}

export type NumberKeyObject<V> = {

    [index: number]: V

}

export function entries<V>(obj : StringKeyObject<V>) : StringValuePair<V>[] {

    return Object.keys(obj).map(key =>

        [ key, obj[key] ] as StringValuePair<V>

    )
}

export function toObject<V>(entries : StringValuePair<V>[]) : StringKeyObject<V> {

    const obj = {}

    entries.forEach(entry => {

        const [key, value] = entry

        obj[key] = value

    })

    return obj

}