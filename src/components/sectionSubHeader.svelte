<script>
  export let sub = '';
</script>

<h2>
  <slot />
  {#if sub}
    <span>
      {sub}
    </span>
  {/if}
</h2>

<style>
  h2 {
    margin-left: -2rem;
    padding-top: 3rem;
    font-size: 1em;
    font-family: sans-serif;
    border-bottom: black 2px solid;
  }
  span {
    font-weight: normal;
  }
</style>
