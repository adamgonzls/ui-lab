<script>
  import '../styles.css'
  import MainNav from "../components/MainNav.svelte";
</script>

<div class="page-container">
  <MainNav />
  <slot />
</div>

<style>
  .page-container {
    height: 100vh;
  }
</style>