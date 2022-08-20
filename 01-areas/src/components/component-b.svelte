<script template="ts">
  import { onMount } from "svelte";
  import { trackPromise } from "../common";
  import { getApiB } from "../api";

  let result = "";

  onMount(() => {
    trackPromise(getApiB().then((data) => (result = data)));
  });
</script>

<h2>Component B</h2>
<h3>result: {result}</h3>
