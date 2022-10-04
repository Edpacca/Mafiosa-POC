import type { NpcModel } from "../models/interfaces/NpcModel";
import type { OpinionTableRow } from "../models/interfaces/OpinionModel";

export function populateOpinionTable(npcs: NpcModel[][], defaultOpinion: number): OpinionTableRow[] {

    const npcIds: string[] = [];
    npcs.forEach(rank => rank.forEach(npc => npcIds.push(npc.id)));

    const generateOpinionValues = (): [string, number][] => npcIds.map(npc => [npc, defaultOpinion]);

    const primaryOpinionTable: OpinionTableRow[] = [
        { recipientId: "player", opinionValues: generateOpinionValues()}
    ]

    npcIds.forEach(id => primaryOpinionTable.push(
        { recipientId: id, opinionValues: generateOpinionValues()}
    ));

    return primaryOpinionTable;
}