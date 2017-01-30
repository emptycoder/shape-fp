import { Dictionary } from './dictionary';
export declare function entries<R>(obj: any): [string, R][];
export declare function mapValues<T, TV, R, RV>(input: T, f: (value: TV) => RV): R;
export declare function fromPairs<T>(pairs: [string, T][]): Dictionary<T>;
