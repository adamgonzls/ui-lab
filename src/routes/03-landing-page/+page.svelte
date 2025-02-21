<script>
  import "$lib/assets/fonts/stylesheet.css"
  import "$lib/assets/fonts/03-landing-page/stylesheet.css"
  import Header from "$components/03-landing-page/Header.svelte"
  import Hero from "$components/03-landing-page/Hero.svelte"
  import Marquee from "$components/03-landing-page/Marquee.svelte"
</script>

<div class="main-container">
  <main>
    <Header />
    <Hero />
    <Marquee />
  </main>
</div>

<style>
  :root {
    --header-font: "Oleo Script", serif;
    --body-font: "Open Sans", sans-serif;
    --white: #ffffff;
    --selago: #f3f5fd;
    --pepto: #f5d7fe;
    --slimer: #e5ffb5;
    --blue-zodiac: #141054;
  }
  .main-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: var(--selago);
    min-height: 100vh;
  }
  main {
    margin-right: auto;
    margin-left: auto;
    border: 5px solid var(--blue-zodiac);
    max-width: 1200px;
    border-radius: 25px;
    font-family: var(--body-font);
  }
</style>
