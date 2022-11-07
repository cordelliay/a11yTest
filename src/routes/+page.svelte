<script>
  import SectionHeading from '@comp/sectionHeader.svelte';
  import Session from '@home/sessions.svelte';
  import { tutorialTitle } from '@stores/stores';
</script>

<SectionHeading sub={$tutorialTitle.subheading}>
  {$tutorialTitle.heading}
</SectionHeading>
<Session part="part1" />
