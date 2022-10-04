import type { Action } from "./ActionModel";
import type { NpcModel } from "./NpcModel";

export interface QueuedAction {
    action: Action;
    recipient: NpcModel;
    probabilty: number;
}

export interface QueuedNpcAction extends QueuedAction {
    actor: NpcModel;
}