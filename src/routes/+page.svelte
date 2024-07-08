<script>
  import "$lib/assets/fonts/stylesheet.css"
  import Triangle from "../components/home/Triangle.svelte"
  import ProjectTile from "../components/home/ProjectTile.svelte"
  export const name = "Adam"
  export let data
</script>

<main>
  <div class="main-container">
    <Triangle color="var(--ocean-green)" rotation="90deg" verticalAlign="end" />
    <div class="content-container">
      <div class="projects">
        {#each data.summaries as { imageSrc, link, name, description }}
          <ProjectTile {imageSrc} {link} {name} {description} />
        {/each}
      </div>
      <h1>UI Lab</h1>
      <p>This is the UI lab!</p>
    </div>
    <Triangle color="var(--light-purple)" />
  </div>
</main>

<style>
  h1 {
    font-family: "Playfair Display";
  }

  main {
    --bg-parchment: #f2e7d5;
    --bg-springwood: #f9f7f4;
    --ocean-green: #44ba80;
    --light-purple: #c282d1;
    --light-gray: #dedddd;
    --traffic-orange: #ff8144;
    --sky: #4b90f1;
    --school-bus: #ffba50;
    --bg-yellow: #fff0a0;
    --deep-blush: #e38895;
    --deep-purple: #323288;

    --header-font: "Playfair Display";
    --body-font: "Open Sans";
    background-color: var(--bg-parchment);
    font-family: var(--body-font);
    font-size: 0.75rem;
  }

  .main-container {
    display: flex;
  }

  .content-container {
    flex: 1;
    margin-top: 75px;
    padding: 20px;
    background-color: var(--bg-springwood);
  }

  .projects {
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    row-gap: 30px;
  }

  @media (min-width: 680px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
      gap: 60px 60px;
    }
  }

  @media (min-width: 900px) {
    .projects {
      grid-template-columns: repeat(3, 1fr);
      gap: 60px 60px;
    }
  }
</style>
