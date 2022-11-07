<script>
  export let sub = '';
</script>

<h1>
  <slot />
  {#if sub}
    <span>
      {sub}
    </span>
  {/if}
</h1>

<style>
  h1 {
    margin-left: -3rem;
    font-size: 2em;
    font-family: sans-serif;
    border-bottom: black 8px solid;
  }
  span {
    font-weight: normal;
  }
</style>
