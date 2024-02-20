<script>
  export const name = "Adam"
  import ProjectTile from "../components/home/ProjectTile.svelte"
  import dogBeanie from "$lib/assets/images/dog-beanie-640w.jpg"
  import purse from "$lib/assets/images/purse-640w.jpg"
  import jacket from "$lib/assets/images/jacket-640w.jpg"
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