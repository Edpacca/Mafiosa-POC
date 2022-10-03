import { actionPoints, opinionTable } from "../store/store";
import type { CompletedAction } from "../models/interfaces/CompletedActionModel";
import type { SubmittedAction } from "../models/interfaces/SubmittedActionModel";
import { get } from "svelte/store";

export const rollPlayerAction = (subAction: SubmittedAction): CompletedAction => {
    const success = (Math.random() * 100) <= subAction.probabilty;

    const apDiff = success 
        ? subAction.action.positiveOutcome.result.actionPoints 
        : subAction.action.negativeOutcome.result.actionPoints;
    
    const opDiff = success
        ? subAction.action.positiveOutcome.result.opinionPoints 
        : subAction.action.negativeOutcome.result.opinionPoints;

    actionPoints.update(ap => ap + apDiff);

    let opinionTableBuffer = [...get(opinionTable)];
    let playerOpinionRowBuffer = {...opinionTableBuffer.find(row => row.recipientId === 'player')};

    playerOpinionRowBuffer.opinionValues.find(ov => ov[0] === subAction.recipient.id)[1] += opDiff
    // console.log(playerOpinionRowBuffer);
    // playerOpinionRowBuffer.opinionValues = playerOpinionRowBuffer.opinionValues.map(ov => {
    //     if (ov[0] === subAction.recipient.id) {
    //         return [ov[0], ov[1] += opDiff]
    //     } else {
    //         return ov;
    //     }
    // });
    
    opinionTableBuffer[0] = {...playerOpinionRowBuffer};
    opinionTable.set(opinionTableBuffer);

    return {
        success,
        ...subAction
    }
}