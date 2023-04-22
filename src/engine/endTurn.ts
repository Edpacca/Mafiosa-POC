import { get } from "svelte/store";
import type { QueuedNpcAction } from "../models/interfaces/QueuedActionModel";
import { actionPoints, queuedActions, completedActions, ACTION_POINTS_PER_TURN, currentTurn, npcData } from "../store/store";
import { calculateActionProbability } from "./calculateProbability";
import { getRandomAction, getRandomNpcId } from "./helpers";
import { submitNpcAction, submitPlayerAction } from "./submitAction";


export const endTurn = () => {
    get(queuedActions).forEach(qAction => {
        completedActions.update(ca => [...ca, submitPlayerAction(qAction)]);
    });

    queuedActions.set([]);
    actionPoints.update(ap => ap + ACTION_POINTS_PER_TURN);

    queueNpcActions().forEach(qNpcAction => {
        completedActions.update(ca => [...ca, submitNpcAction(qNpcAction)]);
    });

    currentTurn.update(ct => ct + 1);
}

export const queueNpcActions = () => {
    const npcs = get(npcData).flat();
    const queuedNpcActions: QueuedNpcAction[] = [];
    const npcBuffer = [...npcs];
    
    npcs.forEach(npc => {
        const action = getRandomAction();
        const recipientId = getRandomNpcId(npc.id);
        const recipient = npcBuffer.find(npc => npc.id === recipientId);
        const probabilty = calculateActionProbability(action, recipient);
        queuedNpcActions.push({
            actor: npc,
            action,
            recipient,
            probabilty,
        });
    });
    return queuedNpcActions;
}

