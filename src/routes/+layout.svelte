<script>
  import Footer from '@comp/footer.svelte';
  import Header from '@comp/header.svelte';
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

<style>
  main {
    padding: 0rem 4rem 4rem 4rem;
    min-height: calc(100vh - 15rem);
  }
</style>
