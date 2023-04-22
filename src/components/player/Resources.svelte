<script>
    import { currentTurn, actionPoints } from "../../store/store";
</script>

<div class="resources bordered header2">
    <div>Current turn:</div> <div class="gold">{$currentTurn}</div> 
    <div>Action Points:</div> <div class="gold">{$actionPoints}</div>
</div>

<style>
    .resources {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
</style>