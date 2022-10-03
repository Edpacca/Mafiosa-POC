<script lang="ts">
    import { 
        currentTurn, actionPoints, 
        selectedNpc, selectedAction, 
        submittedActions, completedActions,
        getPlayerOpinion } from "../../store/store";
    import { ACTION_DATA } from "../../data/actionsData";
    import ActionProbabilities from "./ActionProbabilities.svelte";
    import SelectedAction from "./SelectedAction.svelte";
    import { calculateActionProbability } from "../../engine/calculateProbability";
    import type { SubmittedAction } from "../../models/interfaces/SubmittedActionModel";
    import { rollPlayerAction } from "../../engine/rollAction";

    const submitAction = () => {
        if ($actionPoints > 0) {
            const submittedAction: SubmittedAction = {
            action: $selectedAction,
            recipient: $selectedNpc,
            probabilty: calculateActionProbability($selectedAction, $selectedNpc)
        };
        $submittedActions = [...$submittedActions, submittedAction];
        $selectedAction = undefined;
        $selectedNpc = undefined;
        $actionPoints -= 1;
        }
    }

    const removeAction = (submittedAction: SubmittedAction) => {
        $submittedActions = $submittedActions.filter(sa => sa !== submittedAction);
        $actionPoints += 1;
    }

    const endTurn = () => {
        $submittedActions.forEach(subAction => {
            $completedActions = [...$completedActions, rollPlayerAction(subAction)]
        });

        $submittedActions = [];
        $actionPoints += 3;
        $currentTurn += 1;
    }
</script>

<div class="player-area">
    <div class="header1 center">Player area</div>
    <div class="grid">
        <div class="resources bordered header2">
            <div>Current turn:</div> <div class="gold">{$currentTurn}</div> 
            <div>Action Points:</div> <div class="gold">{$actionPoints}</div>
        </div>
        <div class="current-action">
            <div class="bordered">
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
                    <SelectedAction/>
                    {#if $selectedNpc}
                        <ActionProbabilities/>
                        <button on:click={submitAction} class="submit">Submit Action</button>
                    {/if}
                {/if}
            </div>
            <div class="bordered">
                <div class="header1 center">Submitted Actions</div>
                <table>
                    <thead>
                        <tr>
                            <th>NPC</th>
                            <th>Action</th>
                            <th>Chance of success</th>
                            <th>remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each $submittedActions as submittedAction}
                            <tr>
                                <td>{submittedAction.recipient.name}</td>
                                <td>{submittedAction.action.name}</td>
                                <td>{submittedAction.probabilty}%</td>
                                <td><button class="remove" on:click={() => removeAction(submittedAction)}>-</button></td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
                {#if $submittedActions.length > 0}
                    <button class="submit" on:click={() => endTurn()}>End Round</button>
                {/if}
            </div>
            <div class="bordered">
                <div class="header1 center">Actions history</div>
                <table>
                    <thead>
                        <tr>
                            <th>NPC</th>
                            <th>Action</th>
                            <th>success?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each $completedActions as completedAction}
                            <tr>
                                <td>{completedAction.recipient.name}</td>
                                <td>{completedAction.action.name}</td>
                                <td>{completedAction.success ? "yes" : "no" }</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
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
        grid-template-columns: 2fr 1fr;
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
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 1em;
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

    .submit {
        width: 80%;
        margin-left: 10%;
        height: 2em;
        border: 8px;
        background: blanchedalmond;
        font-weight: bold;
        font-size: 1.5em;
    }   

    .submit:hover {
        background: goldenrod;
        color: red;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
        margin-bottom: 2em;
    }

    thead > tr > th {
        border-bottom: 1px solid blanchedalmond;
    }

    .remove {
        background: red;
        border-radius: 100%;
        font-weight: bold;
    }

    .remove:hover {
        background: rgb(209, 87, 87);
    }
</style>