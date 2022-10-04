<script lang="ts">
    import SubmitButton from "../common/SubmitButton.svelte";
    import { queuedActions } from "../../store/store";
    import { removeQueuedAction } from "../../engine/queueAction";
    import { endTurn } from "../../engine/endTurn";
</script>

<div class="bordered">
    <div class="header1 center">Queued Actions</div>
    <table class="mini-table">
        <thead>
            <tr>
                <th>NPC</th>
                <th>Action</th>
                <th>Chance of success</th>
                <th>remove</th>
            </tr>
        </thead>
        <tbody>
            {#each $queuedActions as qAction}
                <tr>
                    <td>{qAction.recipient.name}</td>
                    <td>{qAction.action.name}</td>
                    <td>{qAction.probabilty}%</td>
                    <td>
                        <button class="remove-button" on:click={() => removeQueuedAction(qAction)}>
                            -
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
    {#if $queuedActions.length > 0}
        <SubmitButton onClick={endTurn} content={"End Round"}/>
    {/if}
</div>