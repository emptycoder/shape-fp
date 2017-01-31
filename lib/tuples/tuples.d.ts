import Dictionary from '../object/dictionary';
export declare const nth: <T>(array: T[], index: number) => T;
export declare const indexed: <T>(array: T[]) => [T, number][];
export declare function groupByFirst<T, K>(array: T[][]): Dictionary<T>;
