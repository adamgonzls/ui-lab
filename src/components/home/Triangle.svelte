<script>
  export let color = "red"
  export let rotation = "0deg"
  export let verticalAlign = "auto"
  export let size = "75px"
</script>

<div
  class="triangle"
  style="--color:{color};--rotation:{rotation};--verticalAlign:{verticalAlign};--size:{size};"
></div>

<style>
  .triangle {
    width: 0;
    height: 0;
    border-bottom: var(--size) solid var(--color);
    border-right: var(--size) solid transparent;
    rotate: var(--rotation);
    align-self: var(--verticalAlign);
  }
</style>
