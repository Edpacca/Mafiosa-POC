<script lang="ts">
    import { filterTraitChances, getChanceString } from "../../engine/calculateProbability";
    import type { Action } from "../../models/interfaces/ActionModel";
    import type { NpcModel } from "../../models/interfaces/NpcModel";
    import type { Chance } from "../../models/types/ChanceModel";
    import type { Trait } from "../../models/types/TraitModel";
    import { selectedAction, selectedNpc } from "../../store/store"
    let chances: {trait: Trait, chanceOfSuccess: Chance}[] = [];
    let probability: number = 50;
    let color: string = "orange";

    const filterChances = (action: Action, selectedNpc: NpcModel) => {
        if (selectedNpc) {
            chances = filterTraitChances(action, selectedNpc.traits);
            calculateProbability(chances);
        }
    }

    const calculateProbability = (chances: {trait: Trait, chanceOfSuccess: Chance}[]) => {
        let total = 0;
        chances.forEach(chance => total += chance.chanceOfSuccess);
        
        switch (total) {
            case -3: probability = 10; color="red"; break;
            case -2: probability = 20; color="red"; break;
            case -1: probability = 30; color="red"; break;
            case 1: probability = 70; color="green"; break;
            case 2: probability = 80; color="green"; break;
            case 3: probability = 90; color="green"; break;
            default: probability = 50; color="orange"; break; 
        }
    }

    $: filterChances($selectedAction, $selectedNpc); 
</script>

<div class="header2 container">
    <div class="meter">
        <div class="meter-value" style={`width: ${probability}%; background: ${color}`}></div>
    </div>
    <span>Chance of success: <span class="gold">{probability}%</span></span>
    {#each chances as chance}
        <div>{chance.trait}: {getChanceString(chance.chanceOfSuccess)}</div>
    {/each}
</div>

<style>
    .container {
        margin: 2em;
    }

    .meter {
        width: 50%;
        height: 2em;
        border: 2px solid  blanchedalmond;
        border-radius: 20px;
    }

    .meter-value{
        height: 100%;
        border-radius: 20px 0 0 20px;
    }
</style>