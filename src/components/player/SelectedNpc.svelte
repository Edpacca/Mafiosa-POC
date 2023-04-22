<script>
    import { getPlayerOpinion, selectedNpc } from "../../store/store";
</script>


{#if $selectedNpc}
    <div class="info">
        <div>Rank: <span class="gold">{$selectedNpc.rank}</span></div>
        <div>Opinion of player: <span class="gold">{getPlayerOpinion($selectedNpc)}</span></div>
        <ul>
            {#each $selectedNpc.traits as trait}
            <li class="gold">{trait}</li>
            {/each}
        </ul>
    </div>
{/if}