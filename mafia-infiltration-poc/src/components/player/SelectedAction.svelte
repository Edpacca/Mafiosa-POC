<script>
    import { selectedAction } from "../../store/store";
</script>

<div class="selected-action">
        <div class="positive">
            success: 
            {#if $selectedAction.positiveOutcome.result.opinionPoints !== 0} 
                <div>
                    {`${$selectedAction.positiveOutcome.result.opinionPoints > 0 ? "+" : ""}
                    ${$selectedAction.positiveOutcome.result.opinionPoints} opinion`}
                </div>
            {/if}
            {#if $selectedAction.positiveOutcome.result.actionPoints !== 0} 
                <div>
                    {`${$selectedAction.positiveOutcome.result.actionPoints > 0 ? "+" : ""}
                    ${$selectedAction.positiveOutcome.result.actionPoints} action points`}
                </div>
            {/if}
        </div>
        <div class="negative">
            failure:
            {#if $selectedAction.negativeOutcome.result.opinionPoints !== 0} 
                <div>  
                    {`${$selectedAction.negativeOutcome.result.opinionPoints > 0 ? "+" : ""}
                    ${$selectedAction.negativeOutcome.result.opinionPoints} opinion`}
                </div>
            {/if}
            {#if $selectedAction.negativeOutcome.result.actionPoints !== 0} 
                <div>  
                    {`${$selectedAction.negativeOutcome.result.actionPoints > 0 ? "+" : ""}
                    ${$selectedAction.negativeOutcome.result.actionPoints} action points`}
                </div>
            {/if}
        </div>
</div>

<style>
    .selected-action {
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