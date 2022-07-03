import { Trait } from "../models/TraitModel";

export const TRAIT_NAMES: string[] = [
    "violence",
    "alcohol",
    "gambling",
    "swimming",
    "table tennis",
    "prostitutes",
    "religion"
]

export const TRAITS_DATA: Trait[] = [];

TRAIT_NAMES.forEach(trait => {
    TRAITS_DATA.push([trait, true]);
    TRAITS_DATA.push([trait, false]);
});