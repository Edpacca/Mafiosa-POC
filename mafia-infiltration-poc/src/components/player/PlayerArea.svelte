<script lang="ts">
    import Resources from "./Resources.svelte";
    import ActionSelection from "./ActionSelection.svelte";
    import SubmitButton from "../common/SubmitButton.svelte";
    import SelectedHeader from "../common/SelectedHeader.svelte";
    import ActionProbabilities from "./ActionProbabilities.svelte";
    import SelectedAction from "./SelectedAction.svelte";
    import SelectedNpc from "./SelectedNpc.svelte";
    import QueuedActions from "./QueuedActions.svelte";
    import { selectedNpc, selectedAction } from "../../store/store";
    import { queueAction } from "../../engine/queueAction";
    import ActionsHistory from "./ActionsHistory.svelte";
</script>

<div class="player-area">
    <div class="header1 center">Player area</div>
    <div class="grid">
        <Resources/>
        <div class="current-action">
            <div class="bordered">
                <SelectedHeader title={"Selected NPC:"} selectedProperty={$selectedNpc ? $selectedNpc.name : ""}/>
                <SelectedNpc/>
                <SelectedHeader title={"Selected Action:"} selectedProperty={$selectedAction ? $selectedAction.name : ""}/>
                {#if $selectedAction}
                    <SelectedAction/>
                    {#if $selectedNpc}
                        <ActionProbabilities/>
                        <SubmitButton onClick={queueAction} content={"Queue Action"}/>
                    {/if}
                {/if}
            </div>
            <QueuedActions/>
            <ActionsHistory/>
        </div>
        <ActionSelection/>
    </div>
</div>

<style>
    .player-area {
		background: rgb(15, 15, 15);
		color: blanchedalmond;
		padding: 20px;
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
</style>