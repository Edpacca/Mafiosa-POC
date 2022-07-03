import { NAMES_DATA } from '../data/namesData';
import { RANKS_DATA } from '../data/ranksData';
import { TRAITS_DATA } from '../data/traitsData';
import { NpcModel } from '../models/NpcModel';
import { Rank } from '../models/RankModel';
import { Trait } from '../models/TraitModel';

export function populateRanks(rankPopulationRatio: number, numberOfTraits: number) {
    const npcs: NpcModel[][] = [];

    RANKS_DATA.forEach((rank, index) => {
        if (index === 0) {
            npcs.push([generateNpc(rank, numberOfTraits)]);
        } else {
            npcs
            .push([...Array(index * rankPopulationRatio)]
            .map(x => generateNpc(rank, numberOfTraits)));
        } 
    });

    return npcs;
}

function generateNpc(rank: Rank, numberOfTraits: number): NpcModel {
    const name: string = getRandomListItem(NAMES_DATA);
    const traits: Trait[] = [];

    for (let i = 0; i < numberOfTraits; i++) {
        traits.push(getRandomListItem(TRAITS_DATA));        
    }

    return {
        name,
        traits,
        rank
    }
}

function getRandomListItem(list: any[]) {
    return list[Math.floor(Math.random() * list.length)];
}