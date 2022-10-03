import type { Action } from "./ActionModel";
import type { NpcModel } from "./NpcModel";

export interface SubmittedAction {
    action: Action;
    recipient: NpcModel;
    probabilty: number;
}