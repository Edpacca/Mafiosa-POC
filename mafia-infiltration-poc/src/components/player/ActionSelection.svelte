<script>
    import { ACTION_DATA } from "../../data/actionsData";
    import { selectedAction } from "../../store/store";
</script>

<div class="bordered">
    <div class="header3 center">Actions</div>
    <div class="actions">
        {#each ACTION_DATA as action}
            <button on:click={() => $selectedAction = action}>{action.name}</button>
        {/each}
    </div>
</div>

<style>
    .actions {
        display: grid;
        margin-top: 10px;
    }

    button {
        background-color: blanchedalmond;
        border: 1px solid rgb(50, 50, 50);
        padding: 0.5em;
        font-family: 'Finlandica';
        font-weight: bold;
    }

    button:hover {
        background-color: goldenrod
    }
</style>