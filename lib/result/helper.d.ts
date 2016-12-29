import { Result } from "./result";
export declare function tryCatch<F, S>(f: () => S): Result<F, S>;
