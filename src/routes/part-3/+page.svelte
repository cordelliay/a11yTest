<script>
    import Frame from '@comp/frame.svelte';
    import SessionOverview from '@comp/sessionOverview.svelte';
    let key = 2;
  </script>
  
  <Frame>
    <SessionOverview {key} />
  </Frame>
  