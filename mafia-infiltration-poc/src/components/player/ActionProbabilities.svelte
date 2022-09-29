<script lang="ts">
    import type { Action } from "../../models/types/ActionModel";
    import type { Trait } from "../../models/types/TraitModel";
    export let action: Action;
    export let traits: Trait[]
    let chances = action.traitChances.filter(chance => traits.includes(chance.trait) && chance.chanceOfSuccess !== 'equal');
</script>

<div class="header2">
    <span>Chance of success: <span class="gold">none</span></span>
    {#each chances as chance}
        <div>{chance.trait}: {chance.chanceOfSuccess}</div>
    {/each}
</div>