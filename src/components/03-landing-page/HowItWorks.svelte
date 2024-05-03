<script>
  import Rectangle from "./Rectangle.svelte"
  import Arrow from "./Arrow.svelte"
</script>

<div class="marquee__item">
  <div class="marquee__rectangle-container">
    <Rectangle />
    <h3 class="rectangle__text">How it works</h3>
    <div class="rectangle__arrow-container">
      <Arrow />
    </div>
  </div>
</div>

<style>
  .marquee__rectangle-container {
    width: 150px;
    height: 150px;
    border: 2px solid red;
    position: relative;
  }

  .rectangle__text {
    position: absolute;
    bottom: 20%;
    left: 5%;
    color: white;
  }

  .rectangle__arrow-container {
    position: absolute;
    top: 20%;
    right: 5%;
    width: 25px;
  }
</style>
