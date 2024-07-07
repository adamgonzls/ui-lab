<script>
  import { projects } from "../routes/projectData.js"
</script>

<nav>
  <ul class="nav__link">
    <li><a href="/">Home</a></li>
    {#each projects as { name, link }}
      {#if link !== ""}
        <li><a href={link}>{name}</a></li>
      {/if}
    {/each}
  </ul>
</nav>

<style>
  .nav__link {
    padding-left: 0;
    display: flex;
    list-style-type: none;
    color: var(--black);
    gap: 0.5em;
    font-size: 0.75rem;
    flex-wrap: wrap;
  }
  @media (min-width: 300px) {
    nav {
      padding-right: 2em;
      padding-left: 2em;
    }
  }
  @media (min-width: 500px) {
    nav {
      padding-right: 3em;
      padding-left: 3em;
      font-size: 1rem;
    }
  }
  @media (min-width: 700px) {
    nav {
      padding-right: 75px;
      padding-left: 75px;
      gap: 1em;
    }
  }
  a {
    text-decoration: none;
    color: var(--black);
    font-family: var(--body-font);
  }
</style>
