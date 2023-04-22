import { actionPoints, npcData, opinionTable } from "../store/store";
import type { CompletedAction, CompletedNpcAction } from "../models/interfaces/CompletedActionModel";
import type { QueuedAction, QueuedNpcAction } from "../models/interfaces/QueuedActionModel";
import { get } from "svelte/store";
import { ACTION_DATA } from "../data/actionsData";

export const submitPlayerAction = (qAction: QueuedAction): CompletedAction => {
    const success = (Math.random() * 100) <= qAction.probabilty;

    const apDiff = success 
        ? qAction.action.positiveOutcome.result.actionPoints 
        : qAction.action.negativeOutcome.result.actionPoints;
    
    const opDiff = success
        ? qAction.action.positiveOutcome.result.opinionPoints 
        : qAction.action.negativeOutcome.result.opinionPoints;

    actionPoints.update(ap => Math.max(ap + apDiff, 0));

    let opinionTableBuffer = [...get(opinionTable)];
    let playerOpinionRowBuffer = opinionTableBuffer.find(row => row.recipientId === 'player');

    playerOpinionRowBuffer.opinionValues.find(ov => ov[0] === qAction.recipient.id)[1] += opDiff;   
    opinionTable.set(opinionTableBuffer);

    return {
        success,
        ...qAction
    }
}

export const submitNpcAction = (qNpcAction: QueuedNpcAction): CompletedNpcAction => {
    const success = (Math.random() * 100) <= qNpcAction.probabilty;

    const opDiff = success
        ? qNpcAction.action.positiveOutcome.result.opinionPoints 
        : qNpcAction.action.negativeOutcome.result.opinionPoints;

    let opinionTableBuffer = [...get(opinionTable)];
    let npcOpinionRowBuffer = opinionTableBuffer.find(row => row.recipientId === qNpcAction.actor.id);
    npcOpinionRowBuffer.opinionValues.find(ov => ov[0] === qNpcAction.recipient.id)[1] += opDiff;
    opinionTable.set(opinionTableBuffer);

    return {
        success,
        ...qNpcAction
    }
}