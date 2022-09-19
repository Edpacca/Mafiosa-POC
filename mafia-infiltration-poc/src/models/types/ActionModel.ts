import type { Outcome } from "../interfaces/OutcomeModel";
import type { Chance } from "./ChanceModel";
import type { Trait } from "./TraitModel";

export interface Action {
    name: string,
    positiveOutcome: Outcome,
    negativeOutcome: Outcome,
    traitChances: {trait: Trait, chanceOfSuccess: Chance}[]
}