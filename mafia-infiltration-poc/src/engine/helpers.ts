import { get } from "svelte/store";
import { ACTION_DATA } from "../data/actionsData";
import type { Action } from "../models/interfaces/ActionModel";
import { npcIds } from "../store/store";

export const getRandomArrayItem = <T>(array: T[]): T => {
    return array[Math.round(Math.random() * (array.length - 1))];
}

export const getRandomAction = (): Action => getRandomArrayItem(ACTION_DATA);
export const getRandomNpcId = (notId: string): string => {
    const id = getRandomArrayItem(get(npcIds));
    if (id === notId) {
        return getRandomNpcId(notId);
    } else return id;
} 