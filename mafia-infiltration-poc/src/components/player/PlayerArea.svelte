<script lang="ts">
    import { currentTurn, actionPoints, selectedNpc } from "../../store/store";
    import { ACTION_DATA } from "../../data/actionsData";
    import type { Action } from "../../models/types/ActionModel";

    let currentAction: Action | undefined = undefined;
</script>

<div class="player-area">
    <div class="header1 center">Player area</div>
    <div class="grid">
        <div class="resources bordered header2">
            <div>Current turn:</div> <div class="hl">{$currentTurn}</div> 
            <div>Action Points:</div> <div class="hl">{$actionPoints}</div>
        </div>
        <div class="bordered current-action">
            <div class="header2">Current Action: <span class="hl">{currentAction ? currentAction.name : ""}</span></div>
            <div class="header2">Selected NPC: <span class="hl">{$selectedNpc ? $selectedNpc.name : ""}</span></div>
        </div>
        <div class="bordered">
            <div class="header3 center">Actions</div>
            <div class="actions">
                {#each ACTION_DATA as action}
                    <button on:click={() => currentAction = action}>{action.name}</button>
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

</style>