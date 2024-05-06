<script>
  import Tear from "./Tear.svelte"
</script>

<div class="marquee__item">
  <div class="marquee__shape-container">
    <Tear />
    <h3 class="marquee__text">Our blog</h3>
  </div>
</div>

<style>
  .marquee__shape-container {
    width: 150px;
    height: 150px;
    position: relative;
  }

  .marquee__text {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
  }
</style>
