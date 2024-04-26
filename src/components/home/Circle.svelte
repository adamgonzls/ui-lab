<script>
  export let color = "red"
</script>

<div class="circle" style="--color:{color};}"></div>

<style>
  .circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--color);
  }
</style>
