<script>
  import Tear from "./Tear.svelte"
  import Arrow from "./Arrow.svelte"
</script>

<div class="marquee__item">
  <div class="marquee__shape-container">
    <Tear />
    <h3 class="marquee__text">Our blog</h3>
    <div class="marquee__arrow-container">
      <Arrow fillColor="#ffffff" />
    </div>
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
    bottom: 25%;
    left: 50%;
    transform: translateX(-50%);
    color: var(--white);
    font-family: var(--header-font);
    line-height: 1;
  }
  .marquee__arrow-container {
    position: absolute;
    top: 20%;
    right: 25%;
    width: 25px;
  }
</style>
