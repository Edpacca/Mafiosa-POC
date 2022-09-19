import { NpcModel } from "./NpcModel";
import type { Result } from "./ResultModel";

export interface Outcome {
    result: Result,
    target: 'single' | 'all'
}
