<script>
  import posterImg from "$lib/assets/images/jacket-640w.jpg"
  export let videoSrc
</script>

<div class="marqee__item">
  <video loop muted autoplay class="marquee__item egg"
    ><source src={videoSrc} type="video/mp4" /></video
  >
</div>

<style>
  .marquee__item {
    width: 150px;
    height: 150px;
    position: relative;
  }

  .egg {
    object-fit: cover;
    /* position: absolute; */
    /* top: 0;
    left: 0;
    width: 100%;
    height: 100%; */
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  }
</style>
