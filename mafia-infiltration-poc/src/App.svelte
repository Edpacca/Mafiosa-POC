<script lang="ts">
	import { npcData, opinionTable, RANK_POPULATION_RATIO, NUMBER_OF_TRAITS, DEFAULT_OPINION } from './store/store';
	import { populateRanks } from './engine/populateRanks';
    import NpcArea from './components/npc/NpcArea.svelte';
    import PlayerArea from './components/player/PlayerArea.svelte';
    import { populateOpinionTable } from './engine/populateOpinions';
    import OpinionTable from './components/opinions/OpinionTable.svelte';

	const regenerateNpcData = () => {
		$npcData =  populateRanks(RANK_POPULATION_RATIO, NUMBER_OF_TRAITS);
		$opinionTable = populateOpinionTable($npcData, DEFAULT_OPINION);
	}

	let isOtVisible = false;
</script>

<main>
	<button on:click={regenerateNpcData}>Regenerate NPCs</button>
	<button on:click={() => isOtVisible = !isOtVisible}>{isOtVisible ? "Hide" : "Show"} opinions</button>
	{#if isOtVisible}
		<OpinionTable />
	{:else}
		<NpcArea />
		<PlayerArea />
	{/if}
</main>

<style>
	button {
		font-family: 'Finlandica';
		background: rgb(15, 15, 15);
		color: blanchedalmond;
		padding: 0.5em;
		border-radius: 5px;
	}
</style>