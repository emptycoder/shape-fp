export class ConditionalIo<X> {

    private isSatisfied : boolean

    constructor(isSatisifed: boolean) {

        this.isSatisfied = isSatisifed

    }

    run(f : () => void) {

        if(this.isSatisfied) {


            f()

        }

    }

}

export const conditionalIo = (isSatisifed: boolean) => new ConditionalIo(isSatisifed)

export const dontRun = conditionalIo(false)

export const run = conditionalIo(true)