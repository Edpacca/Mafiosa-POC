<script lang="ts">
    import { opinionTable } from "../../store/store";
</script>

<div>
    <table>
        <thead>
            <tr>
                <th>Recipient</th>
                {#each $opinionTable as row, i}
                    {#if i > 0}
                        <th>{row.recipientId}</th>
                    {/if}
                {/each}
            </tr>
        </thead>
        {#each $opinionTable as row, i}
            <tr>
                <td class={i > 0 ? "" : "player"}>{row.recipientId}</td>
                {#each row.opinionValues as opinionValue}
                    <td class={i > 0 ? "" : "player"}>{opinionValue[0] === row.recipientId ? '-' : opinionValue[1]}</td>
                {/each}
            </tr>
        {/each}
    </table>
</div>

<style>
    table {
        font-size: 1.5em;
        margin: 2em;
    }

    thead {
        border: 1px solid black;
    }

    th, td {
        padding: 0.1em 0.5em
    }

    thead > tr {
        color: goldenrod;
    }

    .player {
        background: black;
        color: goldenrod;
    }
</style>