import { TraitModel } from "../models/TraitModel";

export const TRAIT_NAMES: string[] = [
    "violence",
    "alcohol",
    "gambling",
    "swimming",
    "table tennis",
    "prostitutes",
    "religion"
]

export const TRAITS: TraitModel[] = [];

TRAIT_NAMES.forEach(trait => {
    TRAITS.push([trait, true]);
    TRAITS.push([trait, false]);
});