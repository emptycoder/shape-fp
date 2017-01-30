import {list} from '../list/list'
export const randomNumber = (from : number) => (to : number) =>

    Math.floor(Math.random() * (to - from)) + from;

export const nth = <T>(array : T[], index : number) : T =>

    array[index]

export const randomIndex = <T>(array : T[]) =>

    randomNumber(0)(array.length)

export const randomElement = <T>(array : T[]) : T =>

    nth(array, randomIndex(array))

export const indexed = <T>(array : T[]) : [T, number][] =>

    array.map((item, index) => [item, index] as [T, number])
