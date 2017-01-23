export const randomNumber = (from : number) => (to : number) =>

    Math.floor(Math.random() * (to - from)) + from;

export const nth = <T>(array : Array<T>, index : number) : T =>

    array[index]

export const head = <T>(array : Array<T>) : T =>

    nth(array, 0)

export const tail = <T>(array : Array<T>) : T[] =>

    array.slice(1, array.length)

export const randomIndex = <T>(array : Array<T>) =>

    randomNumber(0)(array.length)

export const randomElement = <T>(array : Array<T>) : T =>

    nth(array, randomIndex(array))