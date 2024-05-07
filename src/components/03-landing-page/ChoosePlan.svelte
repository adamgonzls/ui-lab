<script>
  import Circle from "./Circle.svelte"
  import DropPin from "./DropPin.svelte"
</script>

<div class="marquee__item">
  <div class="marquee__circle-container">
    <Circle />
    <h3 class="marquee__text">
      <div class="marquee__circle-drop-pin">
        <DropPin />
      </div>
      Choose your own plan
    </h3>
  </div>
</div>

<style>
  .marquee__circle-container {
    width: 175px;
    height: 175px;
    position: relative;
  }
  .marquee__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    font-family: var(--header-font);
    line-height: 1;
  }
  .marquee__circle-drop-pin {
    margin-left: auto;
    margin-right: auto;
    width: 25px;
  }
</style>
