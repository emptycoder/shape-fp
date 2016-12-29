import { Result } from "../result/result";
export declare class Box<X> {
    private x;
    constructor(x: X);
    map<Y>(f: (X) => Y): Box<Y>;
    fold<Y>(f: (X) => Y): Y;
    get(): X;
    run(f: (X) => void): void;
    attempt<F, S>(f: (X) => Result<F, S>): Result<F, S>;
}
export declare const box: <X>(value: X) => Box<X>;
