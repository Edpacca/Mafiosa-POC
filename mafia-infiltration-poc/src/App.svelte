<script lang="ts">
	import { npcData, rankPopulationRatio, numberOfTraits } from './store/store';
	import { populateRanks } from './engine/populateRanks';
    import NpcArea from './components/npc/NpcArea.svelte';
    import PlayerArea from './components/player/PlayerArea.svelte';

	const regenerateNpcData = () => {
		$npcData =  populateRanks(rankPopulationRatio, numberOfTraits)
	}
</script>

<main>
	<button on:click={regenerateNpcData}>Regenerate NPCs</button>
	<NpcArea />
	<PlayerArea />
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