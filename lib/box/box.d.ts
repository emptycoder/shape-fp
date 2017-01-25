import { Result } from "../result/result";
export declare class Box<X> {
    private x;
    constructor(x: X);
    map<Y>(f: (x: X) => Y): Box<Y>;
    fold<Y>(f: (x: X) => Y): Y;
    get(): X;
    run(f: (x: X) => void): void;
    attempt<F, S>(f: (x: X) => Result<F, S>): Result<F, S>;
}
export declare const box: <X>(value: X) => Box<X>;
