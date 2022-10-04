import { actionPoints, queuedActions, selectedAction, selectedNpc } from "../store/store";
import type { QueuedAction } from "../models/interfaces/QueuedActionModel";
import { get } from "svelte/store";
import { calculateActionProbability } from "./calculateProbability";

export const queueAction = () => {
    const action =  get(selectedAction);
    const npc = get(selectedNpc);

    if (get(actionPoints) > 0) {
        const submittedAction: QueuedAction = {
            action: action,
            recipient: npc,
            probabilty: calculateActionProbability(action, npc)
        };
        queuedActions.update(qa => [...qa, submittedAction]);
        selectedAction.set(undefined);
        selectedNpc.set(undefined);
        actionPoints.update(ap => ap - 1);
    }
}

export const removeQueuedAction = (queuedAction: QueuedAction) => {
    queuedActions.update(qa => qa.filter(qa => qa !== queuedAction));
    actionPoints.update(ap => ap + 1);
}
