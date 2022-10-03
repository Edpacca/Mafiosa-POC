import type { Action } from "./ActionModel";
import type { NpcModel } from "./NpcModel";

export interface CompletedAction {
    action: Action;
    recipient: NpcModel;
    success: boolean;
}