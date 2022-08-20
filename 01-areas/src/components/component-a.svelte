<script template="ts">
  import { onMount } from "svelte";
  import {promiseTrackerStore, trackPromise} from '../common';
  import { getApiA } from "../api";

  let result = "";
  let resultB = "pending resultB"
  const componentATrackingAreaKey = "componentA";


  onMount(() => {
    trackPromise(getApiA(3000).then((data) => (result = data)), componentATrackingAreaKey);
    trackPromise(getApiA().then((data) => (result = data)), componentATrackingAreaKey);
  });
</script>

{#if $promiseTrackerStore.get(componentATrackingAreaKey) > 0}
  <h1>.... loading</h1>
  <h1>CA. There area: {$promiseTrackerStore.get(componentATrackingAreaKey)} promises</h1>
{/if}  

<h2>Component A</h2>
<h3>result: {result}</h3>
<h3>result: {resultB}</h3>

<style>
  h1 {
    color: green;
  }
</style>