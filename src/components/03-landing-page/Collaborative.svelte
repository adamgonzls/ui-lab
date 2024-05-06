<script>
  import Accordion from "./Accordion.svelte"
</script>

<div class="marquee__item marquee__item--accordion">
  <div class="accordion__container">
    <Accordion />
  </div>
  <h3 class="marquee__text">Collaborative</h3>
</div>

<style>
  .marquee__item--accordion {
    position: relative;
    height: 200px;
    width: 200px;
  }

  .marquee__text {
    position: absolute;
    bottom: 25%;
    left: 50%;
    transform: translateX(-50%);
    color: #3f3a72;
    font-family: var(--header-font);
  }
</style>
