import { Rank } from "../models/RankModel";
import { Trait } from "../models/TraitModel";

export interface NpcModel {
    name: string,
    traits: Trait[],
    rank: Rank,
}