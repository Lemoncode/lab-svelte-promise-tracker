<script template="ts">
  import { onMount } from "svelte";
  import {trackPromise} from '../common';
  import { getApiA } from "../api";

  let result = "";

  onMount(() => {
    trackPromise(getApiA().then((data) => (result = data)));
  });
</script>

<h2>Component A</h2>
<h3>result: {result}</h3>
