<script>
  import "$lib/assets/fonts/05-app-icon/stylesheet.css"
  import AloeVera from "$components/05-app-icon/AloeVera.svelte"
  const brandColors = [
    {
      color: "#297373",
    },
    {
      color: "#F0AE8E",
    },
    {
      color: "#C2D6C2",
    },
    {
      color: "#C57045",
    },
    {
      color: "#EAC787",
    },
    {
      color: "#2B2B2B",
    },
  ]
</script>

<main class="page">
  <h1 class="page__title">Herbarium House</h1>
  <AloeVera classes="aloe-400" />
  <h2 class="logo__text">Herbarium House</h2>
  {#each brandColors as item}
    <div class="tile"></div>
  {/each}
</main>

<style>
  :root {
    --eg-garamond-font: "EB Garamond", serif;
  }
  .page {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 300px) {
    .page {
      padding-right: 2em;
      padding-left: 2em;
    }
  }
  @media (min-width: 500px) {
    .page {
      padding-right: 3em;
      padding-left: 3em;
      font-size: 1rem;
    }
  }
  @media (min-width: 700px) {
    .page {
      padding-right: 75px;
      padding-left: 75px;
      gap: 1em;
    }
  }
  h1,
  h2 {
    font-family: var(--eg-garamond-font);
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0;
  }
  .page__title {
    margin-top: 2rem;
  }
  .logo__text {
    font-size: 3.5rem;
    text-align: center;
    font-weight: 600;
    letter-spacing: 2px;
    color: #2b2b2b;
  }
</style>
