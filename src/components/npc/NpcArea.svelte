<script lang="ts">
	import NpcRank from './NpcRank.svelte';
	import { npcData } from '../../store/store';
</script>

<div class="npc-area">
    {#each $npcData as npcRank}
        <NpcRank npcs={npcRank} />
    {/each}
</div>

<style>
    .npc-area {
        
    }
</style>