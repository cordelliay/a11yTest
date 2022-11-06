<script>
  import SectionSubHeading from '@comp/sectionSubHeading.svelte';
  import Hyperlink from '@comp/hyperlink.svelte';
  import { base } from '$app/paths';
  import { tutorials } from '@stores/stores';
</script>

{#each $tutorials as part}
  <SectionSubHeading sub={part.subheading}>{part.heading}: </SectionSubHeading>
  <div class="details">
    <Hyperlink href="{base}/{part.destination}">{part.heading}: Session Overview</Hyperlink>
    <Hyperlink href="#">Slides: {part.subheading}</Hyperlink>
  </div>
{/each}

<style>
</style>
