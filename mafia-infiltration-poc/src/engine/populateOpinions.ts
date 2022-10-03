import type { NpcModel } from "../models/interfaces/NpcModel";
import type { OpinionTableRow } from "../models/interfaces/OpinionModel";

export function populateOpinionTable(npcs: NpcModel[][], defaultOpinion: number): OpinionTableRow[] {

    const opinionRow: [string, number][] = [];
    npcs.map(rank => rank.map(npc => opinionRow.push([npc.id, defaultOpinion])));

    const primaryOpinionTable: OpinionTableRow[] = [
        { recipientId: "player", opinionValues: opinionRow}
    ]

    opinionRow.forEach(row => primaryOpinionTable.push(
        { recipientId: row[0], opinionValues: opinionRow}
    ));

    return primaryOpinionTable;
}