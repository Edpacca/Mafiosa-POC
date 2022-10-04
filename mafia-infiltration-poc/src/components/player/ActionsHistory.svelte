<script>
    import { actionPoints, completedActions } from "../../store/store";
</script>

<div class="bordered">
    <div class="header1 center">Actions history</div>
    <table class="mini-table">
        <thead>
            <tr>
                <th>Actor</th>
                <th>Recipient</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {#each $completedActions as cAction}
                <tr class={cAction.actor ? "" : "player"}>
                    <td> {cAction.actor ? cAction.actor.name : "PLAYER"}</td>
                    <td class={cAction.success ? "success" : "failure"}>{cAction.recipient.name}</td>
                    <td class={cAction.success ? "success" : "failure"}>{cAction.action.name}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .success {
        color: greenyellow;
    }

    .failure {
        color: red;
    }

    .player {
        outline: 1px solid blanchedalmond;
    }
    
</style>