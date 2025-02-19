<script>
  import "$lib/assets/fonts/05-app-icon/stylesheet.css"
  import AloeVera from "$components/05-app-icon/AloeVera.svelte"
  import AloeVeraAlt from "$components/05-app-icon/AloeVeraAlt.svelte"
  import AloeVeraEmptyLight from "$components/05-app-icon/AloeVeraEmptyLight.svelte"
  import AloeVeraEmptyDark from "$components/05-app-icon/AloeVeraEmptyDark.svelte"
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
  <p>
    Herbarium House is a micro resort and botanical garden, offering a tranquil
    escape where desert beauty meets refined comfort. The Aloe Vera emblem was
    selected as a symbol of renewal and serenity.
  </p>
  <div class="identity">
    <h2>Identity Logo:</h2>
    <AloeVera classes="aloe-400" />
    <h2 class="logo__text">Herbarium House</h2>
  </div>
  <div class="font">
    <h2>Primary Font:</h2>
    <p class="font__name">EB Garamond</p>
    <p class="font__example">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
  </div>
  <div class="palette">
    <h2>Color Palette:</h2>
    <div class="palette__tiles">
      {#each brandColors as { color }}
        <div style="background-color:{color}" class="palette__color">
          {color}
        </div>
      {/each}
    </div>
  </div>
  <div class="logo">
    <h2>Logos:</h2>
    <h3>Primary Logo:</h3>
    <div class="logo__tiles">
      {#each brandColors as { color }}
        <div style="background-color:{color}" class="logo__color">
          <AloeVera classes="aloe-150" />
        </div>
      {/each}
    </div>
    <h3 class="logo__title--alt">Alternate Logo (Light):</h3>
    <div class="logo__tiles">
      {#each brandColors as { color }}
        <div style="background-color:{color}" class="logo__color">
          <AloeVeraAlt classes="aloe-150" />
        </div>
      {/each}
    </div>
    <h3 class="logo__title--alt">Alternate Logo (Empty Light):</h3>
    <div class="logo__tiles">
      {#each brandColors as { color }}
        <div style="background-color:{color}" class="logo__color">
          <AloeVeraEmptyLight classes="aloe-150" />
        </div>
      {/each}
    </div>
    <h3 class="logo__title--alt">Alternate Logo (Empty Dark):</h3>
    <div class="logo__tiles">
      {#each brandColors as { color }}
        <div style="background-color:{color}" class="logo__color">
          <AloeVeraEmptyDark classes="aloe-150" />
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  :root {
    --eg-garamond-font: "EB Garamond", serif;
  }
  .page {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 6rem;
    font-family: var(--eg-garamond-font);
    font-weight: 500;
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
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0;
  }
  .page__title {
    margin-top: 1rem;
  }
  .logo__text {
    font-size: 3.5rem;
    text-align: center;
    font-weight: 600;
    letter-spacing: 2px;
    color: #2b2b2b;
  }
  .logo__title--alt {
    margin-top: 2rem;
  }
  .identity {
    margin-top: 2rem;
  }
  .font {
    margin-top: 6rem;
  }
  .font__name {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .font__example {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .palette {
    margin-top: 6rem;
  }
  .palette__tiles {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .palette__color {
    height: 100px;
    padding: 0.25rem;
    font-weight: 600;
  }
  .logo {
    margin-top: 6rem;
  }
  .logo__tiles {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .logo__color {
    padding: 2rem;
  }
</style>
