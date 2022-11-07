<script>
  import Frame from '@comp/frame.svelte';
  import SectionHeading from '@comp/sectionHeader.svelte';
  import Session from '@home/sessions.svelte';
  import { tutorialTitle } from '@stores/stores';
</script>

<Frame>
  <SectionHeading sub={$tutorialTitle.subheading}>
    {$tutorialTitle.heading}
  </SectionHeading>
  <Session part="part1" />
</Frame>
