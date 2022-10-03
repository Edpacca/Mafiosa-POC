import type { Outcome } from "./OutcomeModel";
import type { Chance } from "../types/ChanceModel";
import type { Trait } from "../types/TraitModel";

export interface Action {
    name: string,
    positiveOutcome: Outcome,
    negativeOutcome: Outcome,
    traitChances: {trait: Trait, chanceOfSuccess: Chance}[]
}