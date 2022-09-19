import { NAMES_DATA } from '../data/namesData';
import { RANKS_DATA } from '../data/ranksData';
import { TRAITS_DATA } from '../data/traitsData';
import type { NpcModel } from '../models/interfaces/NpcModel';
import type { Rank } from '../models/types/RankModel';
import type { Trait } from '../models/types/TraitModel';

export function populateRanks(rankPopulationRatio: number, numberOfTraits: number) {
    const npcs: NpcModel[][] = [];

    RANKS_DATA.forEach((rank, index) => {
        if (index === 0) {
            npcs.push([generateNpc(rank, index, numberOfTraits)]);
        } else {
            npcs
            .push([...Array(index * rankPopulationRatio)]
            .map((x, i) => generateNpc(rank, i, numberOfTraits)));
        } 
    });

    return npcs;
}

function generateNpc(rank: Rank, rankId: number, numberOfTraits: number): NpcModel {
    const name: string = getRandomListItem(NAMES_DATA);
    const traits: Trait[] = [];

    for (let i = 0; i < numberOfTraits; i++) {
        const trait = getUniqueListItem(TRAITS_DATA, traits);
        traits.push(trait);
    }

    return {
        id: rank+(rankId+1),
        name,
        traits,
        rank,
        playerOpinion: 5
    }
}

function getRandomListItem(list: any[]) {
    return list[Math.floor(Math.random() * list.length)];
}

function getUniqueListItem<l>(sourceList: l[], targetList: l[]): l {
    let item = getRandomListItem(sourceList);

    if (targetList.includes(item)) {
        return getUniqueListItem(sourceList, targetList);
    } else {
        return item;
    }

}