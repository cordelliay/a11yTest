<script>
  export let href = '#';
</script>

<a {href} {...$$restProps}><slot /></a>

<style>
  a {
    font-family: sans-serif;
    display: block;
    padding: 0.5em 0;
    color: #00829bff;
  }

  a:focus-visible {
    outline: 2px dashed black;
  }

  a:hover {
    color: black;
  }
</style>
