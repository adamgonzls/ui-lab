<script>
  import "$lib/assets/fonts/stylesheet.css"
  import ProjectTile from "../components/home/ProjectTile.svelte"
  export const name = "Adam"
  export let data
</script>

<main>
  <h1>UI Lab</h1>
  <p>This is the UI lab!</p>
  <div class="grid-container">
    {#each data.summaries as {src, link, name, description}}
      <ProjectTile 
        {src}
        {link}
        {name}
        {description}
      >
      </ProjectTile>
    {/each}
  </div>
</main>

<style>
  h1 {
    font-family: 'Playfair Display';
  }

  main {
    --bg-yellow: #fff0a0;
    --deep-blush: #e38895;
    --deep-purple: #323288;
    --header-font: 'Playfair Display';
    --body-font: 'Open Sans';
    background-color: var(--bg-yellow);
    font-family: var(--body-font);
    font-size: .75rem;
  }

  .grid-container {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 40px;
    align-items: end;
  }
</style>