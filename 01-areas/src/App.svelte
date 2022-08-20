<script lang="ts">
import { get } from "svelte/store";

  import { promiseTrackerStore, globalAreaKey } from "./common";
  import { ComponentA, ComponentB } from "./components";
</script>

<main>
  {#if $promiseTrackerStore.get(globalAreaKey) > 0}
    <h1>.... loading</h1>
    <h1>There are {$promiseTrackerStore.get(globalAreaKey)} promises</h1>
  {/if}  
  <ComponentA />
  <ComponentB />
</main>

<style>
</style>
