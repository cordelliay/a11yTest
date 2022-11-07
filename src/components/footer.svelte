<script>
  import { base } from '$app/paths';
</script>

<footer class="grid">
  <img src="{base}/logo.png" alt="" />
  <p>Cordellia Yokum <span class="light"> for CAST 2022</span></p>
</footer>

<style>
  footer {
    background-color: black;
    color: white;
    padding: 1rem 0rem 1rem 0rem;
    font-family: sans-serif;
    font-size: 1em;
    font-weight: 700;
    width: 100vw;
    overflow: hidden;
    margin: -0.5rem;
  }
  .light {
    font-weight: 400;
  }
  img {
    height: 25px;
    width: auto;
    filter: invert(100%);
    padding: 1rem;
  }
  .grid {
    display: flex;
    align-items: center;
  }
</style>
