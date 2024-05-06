<script>
  import Accordion from "./Accordion.svelte"
</script>

<div class="marquee__item marquee__item--accordion">
  <div class="accordion__container">
    <Accordion />
  </div>
  <h3 class="accordion__text">Collaborative</h3>
</div>

<style>
  .marquee__item--accordion {
    position: relative;
    height: 150px;
    width: 150px;
  }

  .accordion__container {
  }

  .accordion__text {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    color: #3f3a72;
  }
</style>
