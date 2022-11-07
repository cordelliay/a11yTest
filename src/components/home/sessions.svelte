<script>
  import SectionSubHeading from '@comp/sectionSubHeader.svelte';
  import SessionDetails from '@comp/sessionDetails.svelte';
  import { tutorials } from '@stores/stores';
</script>

{#each $tutorials as part}
  <SectionSubHeading sub={part.subheading}>{part.heading}:</SectionSubHeading>
  <SessionDetails {part} />
{/each}
