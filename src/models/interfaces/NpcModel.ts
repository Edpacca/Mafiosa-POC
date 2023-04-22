import type { Rank } from "../types/RankModel";
import type { Trait } from "../types/TraitModel";

export interface NpcModel {
    name: string,
    id: string,
    traits: Trait[],
    rank: Rank,
}