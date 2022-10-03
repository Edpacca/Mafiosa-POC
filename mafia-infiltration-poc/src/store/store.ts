import { Writable, writable, get } from "svelte/store";
import { populateOpinionTable } from "../engine/populateOpinions";
import { populateRanks } from "../engine/populateRanks";
import type { NpcModel } from "../models/interfaces/NpcModel";
import type { OpinionTableRow } from "../models/interfaces/OpinionModel";
import type { Action } from "../models/types/ActionModel";

export const RANK_POPULATION_RATIO = 3;
export const NUMBER_OF_TRAITS = 3;
export const DEFAULT_OPINION = 5;

export const npcData: Writable<NpcModel[][]> = writable(populateRanks(RANK_POPULATION_RATIO, NUMBER_OF_TRAITS));
export const opinionTable: Writable<OpinionTableRow[]> = writable(populateOpinionTable(get(npcData), DEFAULT_OPINION));

export const selectedNpc: Writable<NpcModel | undefined> = writable(undefined);

export const currentTurn: Writable<number> = writable(1);
export const actionPoints: Writable<number> = writable(10);
export const selectedAction: Writable<Action> = writable(undefined);

export const getPlayerOpinion = (npc: NpcModel): number => {
    return get(opinionTable)[0].opinionValues.find(value => value[0] === npc.id)[1];
}