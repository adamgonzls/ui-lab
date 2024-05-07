<script lang="ts">
  import posterImg from "$lib/assets/images/jacket-640w.jpg"
  export let videoSrc: string
</script>

<div class="marqee__item">
  <video loop muted autoplay class="marquee__item marquee__item--mask"
    ><source src={videoSrc} type="video/mp4" /></video
  >
</div>

<style>
  .marquee__item {
    width: 250px;
    height: 150px;
    position: relative;
  }
  .marquee__item--mask {
    object-fit: cover;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  }
</style>
