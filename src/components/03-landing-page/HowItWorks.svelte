<script>
  import Rectangle from "./Rectangle.svelte"
  import Arrow from "./Arrow.svelte"
</script>

<div class="marquee__item">
  <div class="marquee__rectangle-container">
    <Rectangle />
    <h3 class="marquee__text">How it works</h3>
    <div class="marquee__arrow-container">
      <Arrow fillColor="#ffffff" />
    </div>
  </div>
</div>

<style>
  .marquee__rectangle-container {
    width: 150px;
    height: 150px;
    position: relative;
  }

  .marquee__text {
    position: absolute;
    bottom: 25%;
    left: 5%;
    color: white;
    font-family: var(--header-font);
  }

  .marquee__arrow-container {
    position: absolute;
    top: 20%;
    right: 5%;
    width: 25px;
  }
</style>
