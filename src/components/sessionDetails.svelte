<script>
  import Hyperlink from '@comp/hyperlink.svelte';
  import { base } from '$app/paths';
  export let part = {};
</script>

<div class="details">
  <Hyperlink href="{base}/{part.destination}">{part.heading}: Session Overview</Hyperlink>
  <Hyperlink href="#">Slides: {part.subheading}</Hyperlink>
</div>
