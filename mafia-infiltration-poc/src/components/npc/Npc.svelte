<script lang="ts">
    import type { NpcModel } from "../../models/interfaces/NpcModel";
    import { selectedNpc } from "../../store/store";
    export let data: NpcModel
    const rankStyle = `rank ${data.rank}`

    const selectNpc = () => $selectedNpc = data;
</script>

<div class="npc-wrapper" on:click={selectNpc}>
    <div class="npc-header">
        <div class={rankStyle}>{data.id}</div>
        <div class="name">{data.name}</div>
    </div>

    <div class="traits">
        {#each data.traits as trait}
            <div class="trait">{trait}</div>
        {/each}
    </div>


</div>

<style>
    .npc-wrapper {
        border: 2px solid rgb(0, 0, 0);
        padding: 0.2em;
        width: 15em;
        height: 8em;
    }

    .npc-wrapper:hover {
        border: 2px solid rgb(0, 6, 97);
        background: rgb(200, 255, 252);
    }

    .npc-header {
        display: grid;
        width: 100%;
        grid-template-columns: 2em 1fr;
        border-bottom: 1px solid grey;
    }

    .rank {
        font-weight: bold;
        font-size: 1.2em;
        text-align: left;
    }

    .A {
        color: red;
    }

    .B {
        color: orange;
    }

    .C {
        color: blue;
    }

    .D {
        color: green;
    }

    .name {
        font-style: italic;
        font-size: 1.2em;
        text-align: left;
    }

    .opinion {
        font-weight: bold;
        margin-bottom: 0.5em;
    }
</style>