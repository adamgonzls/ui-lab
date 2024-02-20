<script>
  export const name = "Adam"
  import ProjectTile from "../components/home/ProjectTile.svelte"
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
  main {
    background-color: #fff0a0;
    font-family: Arial, Helvetica, sans-serif;
  }

  .grid-container {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 40px;
    align-items: end;
  }
</style>