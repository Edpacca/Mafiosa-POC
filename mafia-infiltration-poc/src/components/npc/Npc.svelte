<script lang="ts">
    import { selectedNpc, actionPoints } from "../../store/store";
    import type { NpcModel } from "../../models/interfaces/NpcModel";
    export let data: NpcModel;
    export let isSelected: boolean = false;
    export let isSubmitted: boolean = false;
    const rankStyle = `rank ${data.rank}`
    $: classString = `${isSubmitted ? "submitted" : isSelected ? "selected" : ""} npc-wrapper ${$actionPoints <= 0 ? "no-ap" : ""}`;

    const selectNpc = () => {
        if (!isSubmitted && $actionPoints > 0) {
            $selectedNpc = data;
        }
    }
</script>

<div class={classString} on:click={selectNpc}>
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
    }

    .no-ap {
        background: rgb(207, 207, 207);
        color: rgb(90, 90, 90);
    }

    .selected {
        background: rgb(1, 196, 186);
    }

    .submitted {
        background: rgb(72, 72, 72);
        color: gold;
    }

    .npc-wrapper:not(.selected):not(.submitted):not(.no-ap):hover {
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