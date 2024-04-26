<script lang="ts">
  import Triangle from "./Triangle.svelte"
  import Circle from "./Circle.svelte"
  export let link: string
  export let name: string
  export let description: string
  export let imageSrc: string
  export let index: number
</script>

<div class="project">
  <div class="project__image-container">
    <a href={link}><img class="project__image" src={imageSrc} alt="" /></a>
    <div class="shape-grid">
      <Triangle
        color="var(--ocean-green)"
        rotation="180deg"
        verticalAlign="end"
        size="50px"
      />
      <Circle color="var(--traffic-orange)" />
      <Triangle
        color="var(--light-purple)"
        rotation="180deg"
        verticalAlign="end"
        size="50px"
      />
    </div>
  </div>
  <h2 class="project__name"><a class="project__link" href={link}>{name}</a></h2>
  <p class="project__description">{description}</p>
  <div>link: {link}</div>
</div>

<style>
  .project {
    border-right: 2px solid var(--light-gray);
  }

  .project:nth-of-type(3n) {
    border-right: none;
  }

  .project__image-container {
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    /* position: relative; */
  }

  .project__image {
    width: 100px;
    height: 100px;
    border-radius: 9999px;
    object-fit: cover;
  }

  .shape-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .project__name {
    margin-top: 16px;
    font-size: 0.75rem;
  }

  .project__link {
    text-decoration: none;
    color: var(--black);
  }

  .project__description {
    margin-top: 16px;
  }
</style>
