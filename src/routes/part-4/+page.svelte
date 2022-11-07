<script>
  import Frame from '@comp/frame.svelte';
  import SessionOverview from '@comp/sessionOverview.svelte';
  let key = 3;
</script>

<Frame>
  <SessionOverview {key} />
</Frame>
