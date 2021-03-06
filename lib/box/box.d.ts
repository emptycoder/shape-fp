import { Result } from '../result/result';
import { List } from '../list/list';
export declare class Box<X> {
    private x;
    constructor(x: X);
    map<Y>(f: (x: X) => Y): Box<Y>;
    chain<Y>(f: (x: X) => Box<Y>): Box<Y>;
    fold<Y>(f: (x: X) => Y): Y;
    get(): X;
    run(f: (x: X) => void): void;
    attempt<F, S>(f: (x: X) => Result<F, S>): Result<F, S>;
    list<Y>(f: (x: X) => Y[]): List<Y>;
}
export declare function box<X>(value: X): Box<X>;
