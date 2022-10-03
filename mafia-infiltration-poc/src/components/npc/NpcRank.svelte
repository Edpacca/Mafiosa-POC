<script lang="ts">
    import type { NpcModel } from "../../models/interfaces/NpcModel"
    import { selectedNpc, submittedActions } from "../../store/store";
    export let npcs: NpcModel[];
    import Npc from "./Npc.svelte";
</script>

<div class="npc-rank">
    {#each npcs as npc}
        <Npc 
            data={npc}
            isSelected={$selectedNpc === npc}
            isSubmitted={$submittedActions.map(sa => sa.recipient).includes(npc)}/>
    {/each}
</div>

<style>
    .npc-rank {
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 1em;
		margin: 1em;
        min-height: 8em;
	}
</style>