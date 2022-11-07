<script>
  import { base } from '$app/paths';
</script>

<header class="cy-header grid">
  <img src="{base}/logo.png" alt="A11yTest Home" />
  <a href={base} class="light"> Home </a>
</header>

<style>
  .cy-header {
    background-color: white;
    color: black;
    padding: 1rem 0rem 0rem 0rem;
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    overflow: hidden;
  }
  .light {
    font-weight: 400;
    text-transform: uppercase;
  }
  img {
    height: 25px;
    width: auto;
    padding: 1rem 0.5rem;
  }
  .grid {
    display: flex;
    align-items: center;
  }
  a {
    font-family: sans-serif;
    display: block;
    padding: 0.5em 0;
    color: #00829bff;
    text-decoration: none;
  }

  a:focus-visible {
    outline: 2px dashed black;
  }

  a:hover {
    color: black;
    text-decoration: underline;
  }
</style>
