<script>
  import Square from "./Square.svelte"
</script>

<div class="marquee__item">
  <div class="marquee__square-container">
    <Square />
    <h3 class="marquee__text">About CircleUp</h3>
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
    bottom: 20%;
    left: 5%;
    color: white;
    width: 50%;
  }
</style>
