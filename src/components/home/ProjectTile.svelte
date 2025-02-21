<script lang="ts">
  import Triangle from "$components/home/Triangle.svelte"
  import Circle from "$components/home/Circle.svelte"
  import defaultImage from "$lib/assets/images/purse-640w.jpg"
  export let link: string
  export let name: string
  export let description: string
  export let imageSrc: string
  imageSrc = imageSrc && imageSrc.trim() ? imageSrc : defaultImage
  const rotationOptions = ["0deg", "90deg", "180deg", "270deg"]
  const colorOptions = [
    "var(--ocean-green)",
    "var(--traffic-orange)",
    "var(--light-purple)",
    "var(--traffic-orange)",
    "var(--school-bus)",
    "var(--sky)",
  ]
  function getRandomElement(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
</script>

<div class="project">
  <div class="project__image-container">
    {#if link}
      <a href={link}
        ><img
          class="project__image"
          src={imageSrc}
          alt="Avatar for project"
          style="border: 2px solid {getRandomElement(colorOptions)}"
        /></a
      >
    {:else}
      <img
        class="project__image"
        src={imageSrc}
        alt="Avatar for project"
        style="border: 2px solid {getRandomElement(colorOptions)}"
      />
    {/if}
    <div class="shape-grid">
      <Triangle
        color={getRandomElement(colorOptions)}
        rotation={getRandomElement(rotationOptions)}
        verticalAlign="end"
        size="50px"
      />
      <Circle color={getRandomElement(colorOptions)} />
      <Triangle
        color={getRandomElement(colorOptions)}
        rotation={getRandomElement(rotationOptions)}
        verticalAlign="end"
        size="50px"
      />
    </div>
  </div>
  <div class="project__details">
    {#if link}
      <h2 class="project__name">
        <a class="link" href={link}>{name}</a>
      </h2>
    {:else}
      <h2 class="project__name">{name}</h2>
    {/if}
    <p class="project__description">{description}</p>
    {#if link}
      <div><a class="link project__link" href={link}>View Project</a></div>
    {:else}
      <div></div>
    {/if}
  </div>
</div>

<style>
  .project {
    border-right: 2px solid var(--light-gray);
    /* display: flex; */
    gap: 1rem;
  }

  .project__image-container {
    /* flex: 1; */
    display: flex;
    gap: 1rem;
  }

  .project__image {
    width: 100px;
    height: 100px;
    border-radius: 9999px;
    object-fit: cover;
  }

  .project__details {
    flex: 1;
  }

  .shape-grid {
    display: none;
  }

  .project__name {
    margin-top: 1rem;
    font-size: 0.75rem;
  }

  .link {
    text-decoration: none;
    color: var(--black);
  }

  .project__link {
    display: inline-block;
    margin-top: 0.5rem;
    font-weight: 600;
  }

  .project__description {
    margin-top: 0.75rem;
    line-height: 175%;
    max-width: 100%;
  }
  @media (min-width: 410px) {
    .shape-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-self: start;
    }
  }
  @media (min-width: 540px) {
    .project {
      display: flex;
    }
    .project__name {
      margin-top: 0;
    }
  }
  @media (min-width: 680px) {
    .project {
      display: block;
    }
    .project__name {
      margin-top: 1rem;
    }
  }
  @media (min-width: 900px) {
    .project:nth-of-type(3n) {
      border-right: none;
    }
  }
</style>
