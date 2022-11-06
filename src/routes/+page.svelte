<script>
  import SectionHeading from '@comp/sectionHeading.svelte';
  import Session from '@home/sessions.svelte';
  import { tutorialTitle } from '@stores/stores';
</script>

<main>
  <SectionHeading sub={$tutorialTitle.subheading}>
    {$tutorialTitle.heading}
  </SectionHeading>
  <Session part="part1" />
</main>
