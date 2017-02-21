export function repeat<T>(item : T, repetitions : number) : T[] {

    const repeated = []

    for (let i = 0; i < repetitions; i++) {

        repeated[i] = item

    }

    return repeated

}