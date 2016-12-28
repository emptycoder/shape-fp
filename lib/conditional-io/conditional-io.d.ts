export declare class ConditionalIo<X> {
    private isSatisfied;
    constructor(isSatisifed: boolean);
    run(f: () => void): void;
}
export declare const conditionalIo: (isSatisifed: boolean) => ConditionalIo<{}>;
export declare const dontRun: ConditionalIo<{}>;
export declare const run: ConditionalIo<{}>;
