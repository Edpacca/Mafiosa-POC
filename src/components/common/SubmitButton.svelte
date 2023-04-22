<script lang="ts">
    export let onClick: () => void;
    export let content: string;
</script>

<button on:click={onClick} class="submit">
    {content}
</button>

<style>
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
</style>