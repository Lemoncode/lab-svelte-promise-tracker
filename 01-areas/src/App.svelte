<script lang="ts">
  import { promiseTrackerStore } from "./common";
  import { ComponentA, ComponentB } from "./components";
</script>

<main>
  {#if $promiseTrackerStore > 0}
    <h1>.... loading</h1>
    <h1>There are {$promiseTrackerStore} promises</h1>
  {/if}
  <ComponentA />
  <ComponentB />
</main>

<style>
</style>
