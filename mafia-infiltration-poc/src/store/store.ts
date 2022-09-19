import { Writable, writable } from "svelte/store";
import { populateRanks } from "../engine/populateRanks";
import type { NpcModel } from "../models/interfaces/NpcModel";

export const rankPopulationRatio = 3;
export const numberOfTraits = 3;
export const npcData: Writable<NpcModel[][]> = writable(populateRanks(rankPopulationRatio, numberOfTraits));

export const selectedNpc: Writable<NpcModel | undefined> = writable(undefined);

export const currentTurn: Writable<number> = writable(1);
export const actionPoints: Writable<number> = writable(10);