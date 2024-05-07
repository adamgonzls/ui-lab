<script>
  import Square from "./Square.svelte"
  import Arrow from "./Arrow.svelte"
</script>

<div class="marquee__item">
  <div class="marquee__square-container">
    <Square />
    <h3 class="marquee__text">About CircleUp</h3>
    <div class="marquee__arrow-container">
      <Arrow fillColor="#141054" />
    </div>
  </div>
</div>

<style>
  .marquee__square-container {
    width: 150px;
    height: 150px;
    position: relative;
  }
  .marquee__text {
    position: absolute;
    bottom: 25%;
    left: 5%;
    width: 50%;
    color: var(--blue-zodiac);
    font-family: var(--header-font);
    line-height: 1;
  }
  .marquee__arrow-container {
    position: absolute;
    top: 20%;
    right: 5%;
    width: 25px;
  }
</style>
