<script lang="ts">
  import Gear from "./Gear.svelte"
  import Eye from "./Eye.svelte"
  export let marqueeText: string
  export let marqueeIcon: string
  export let bgColor: string
</script>

<div class="marquee__item">
  <div class="spin__container">
    <div class="spin">
      <Gear fillColor={bgColor} />
    </div>
    <h3 class="marquee__text">
      <div class="eye__container"><Eye /></div>
      {marqueeText}
    </h3>
  </div>
</div>

<style>
  .spin {
    animation: spin 5s linear infinite;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .spin__container {
    position: relative;
    width: 150px;
    height: 150px;
  }
  .eye__container {
    margin-left: auto;
    margin-right: auto;
    width: 25px;
  }
  .marquee__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--white);
    text-align: center;
    font-family: var(--header-font);
    line-height: 1;
  }
</style>
