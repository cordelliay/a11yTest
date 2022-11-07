<script>
  import Frame from '@comp/frame.svelte';
  import SessionOverview from '@comp/sessionOverview.svelte';
  let key = 0;
</script>

<Frame>
  <SessionOverview {key} />
</Frame>
