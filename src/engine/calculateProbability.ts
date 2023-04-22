import type { Action } from "../models/interfaces/ActionModel";
import type { NpcModel } from "../models/interfaces/NpcModel";
import type { Chance } from "../models/types/ChanceModel";
import type { Trait } from "../models/types/TraitModel";

export const filterTraitChances = (action: Action, traits: Trait[]) => {
        return action.traitChances.filter(chance => 
            traits.includes(chance.trait) && chance.chanceOfSuccess !== 0);
}

export const calculateActionProbability = (action: Action, recipient: NpcModel): number => {
    const chances = filterTraitChances(action, recipient.traits);
    let total = 0;
    chances.forEach(chance => total += chance.chanceOfSuccess);
    
    switch (total) {
        case -3: return 10;
        case -2: return 20;
        case -1: return 30;
        case 1: return 70;
        case 2: return 80;
        case 3: return 90;
        default: return 50; 
    }
}
    
export const getChanceString = (chance: Chance): string => {
    return chance === -1 ? 'low' : chance === 1 ? 'high' : 'equal'
}
