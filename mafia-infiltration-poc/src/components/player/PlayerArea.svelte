<script lang="ts">
    import { currentTurn, actionPoints, selectedNpc, selectedAction, getPlayerOpinion } from "../../store/store";
    import { ACTION_DATA } from "../../data/actionsData";
    import ActionProbabilities from "./ActionProbabilities.svelte";
</script>

<div class="player-area">
    <div class="header1 center">Player area</div>
    <div class="header1 center">{$selectedAction?.positiveOutcome.result.opinionPoints}</div>
    <div class="grid">
        <div class="resources bordered header2">
            <div>Current turn:</div> <div class="gold">{$currentTurn}</div> 
            <div>Action Points:</div> <div class="gold">{$actionPoints}</div>
        </div>
        <div class="bordered current-action">
            <div class="header2">Selected NPC: <span class="gold">{$selectedNpc ? $selectedNpc.name : ""}</span></div>
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
            <div class="header2">Selected Action: <span class="gold">{$selectedAction ? $selectedAction.name : ""}</span></div>
            {#if $selectedAction}
                <div class="selected-action">
                    <div class="info">
                        <div class="positive">
                            {#if $selectedAction.positiveOutcome.result.opinionPoints !== 0} 
                            <div>{`${$selectedAction.positiveOutcome.result.opinionPoints > 0 ? "+" : ""}${$selectedAction.positiveOutcome.result.opinionPoints} opinion`}</div>
                            {/if}
                            {#if $selectedAction.positiveOutcome.result.actionPoints !== 0} 
                            <div>{`${$selectedAction.positiveOutcome.result.actionPoints > 0 ? "+" : ""}${$selectedAction.positiveOutcome.result.actionPoints} action points`}</div>
                            {/if}
                        </div>
                        <div class="negative">
                            {#if $selectedAction.negativeOutcome.result.opinionPoints !== 0} 
                            <div>{`${$selectedAction.negativeOutcome.result.opinionPoints > 0 ? "+" : ""}${$selectedAction.negativeOutcome.result.opinionPoints} opinion`}</div>
                            {/if}
                            {#if $selectedAction.negativeOutcome.result.actionPoints !== 0} 
                            <div>{`${$selectedAction.negativeOutcome.result.actionPoints > 0 ? "+" : ""}${$selectedAction.negativeOutcome.result.actionPoints} action points`}</div>
                            {/if}
                        </div>
                    </div>
                </div>
                {#if $selectedNpc}
                    <ActionProbabilities bind:action={$selectedAction} bind:traits={$selectedNpc.traits}/>
                {/if}
            {/if}
            </div>
        <div class="bordered">
            <div class="header3 center">Actions</div>
            <div class="actions">
                {#each ACTION_DATA as action}
                    <button on:click={() => $selectedAction = action}>{action.name}</button>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>


    .player-area {
		background: rgb(15, 15, 15);
		color: blanchedalmond;
		padding: 20px;
	}

    .resources {
        display: grid;
        grid-template-columns: 60% 1fr;
    }

    .grid {
        margin-top: 10px;
		display: grid;
		grid-template-columns: 25% 1fr;
		column-gap: 10px;
		row-gap: 10px;
    }

    .current-action {
        grid-row: span 2;
    }

	.bordered {
		border: 2px solid rgb(50, 50, 50);
	}

    .actions {
        display: grid;
        margin-top: 10px;
    }

    .actions button {
        background-color: blanchedalmond;
        border: 1px solid rgb(50, 50, 50);
        padding: 0.5em;
        font-family: 'Finlandica';
        font-weight: bold;
    }

    .actions button:hover {
        background-color: goldenrod
    }

    .info {
        font-size: 1.4em;
        margin-top: 0.5em;
    }

    .positive {
        color: green;
        display: flex;
        column-gap: 1em;
    }

    .negative {
        color: red;
        display: flex;
        column-gap: 1em;
    }

</style>