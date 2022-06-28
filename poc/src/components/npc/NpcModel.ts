import { Rank } from "../../models/RankModel";
import { TraitModel } from "../../models/TraitModel";

export interface NpcModel {
    name: string,
    opinions: [[string, number]],
    traits: TraitModel[],
    rank: Rank,
}