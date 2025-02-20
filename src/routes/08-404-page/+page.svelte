<script lang="ts">
  import Moon from "$components/04-404-page/Moon.svelte"
  import Astronaut from "$components/04-404-page/Astronaut.svelte"
  import FallingStar from "$components/04-404-page/FallingStar.svelte"
  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min
  }
  function getBorderRadius() {
    return `0 ${getRandomArbitrary(38, 88)}% ${getRandomArbitrary(58, 95)}% 0 / 0 ${getRandomArbitrary(28, 65)}% ${getRandomArbitrary(38, 95)}% 0`
  }
  const randomBorderRadius = getBorderRadius()
</script>

<div>
  <nav class="navigation__container">
    <span>Company logo</span>
    <ul class="navigation__links">
      <li>Home</li>
      <li>About</li>
      <li>Careers</li>
      <li>Contact Us</li>
      <li>FAQ</li>
    </ul>
  </nav>
  <main class="content-container">
    <div
      class="background-blob"
      style="border-radius: {randomBorderRadius}"
    ></div>
    <div class="message">
      <div>
        <h1>Oops!</h1>
        <p>Houston, we have a 404.</p>
        <p>Page not found in this galaxy.</p>
        <a class="button" href="/">Head back home</a>
      </div>
    </div>
    <div class="graphic">
      <div class="error">
        <span class="letter">4</span>
        <Moon additionalClasses="moon rotate" />
        <span class="letter">4</span>
      </div>
      <div>
        <Astronaut additionalClasses="astronaut floating" />
      </div>
      <!-- <FallingStar /> -->
    </div>
  </main>
</div>

<style>
  :root {
    --status-code-size: 7rem;
    --body-font: "Open Sans", sans-serif;
  }
  @media (min-width: 750px) {
    :root {
      --status-code-size: 10rem;
    }
  }
  @media (min-width: 1200px) {
    :root {
      --status-code-size: 15rem;
    }
  }
  .navigation__container {
    font-family: var(--body-font);
    padding: 1rem;
    display: flex;
  }
  .navigation__links {
    margin-left: auto;
    display: flex;
    gap: 1rem;
    list-style-type: none;
    color: #465a64;
  }
  .background-blob {
    position: absolute;
    background-color: #f0f0f0;
    left: 0;
    height: 100%;
    width: 50%;
    z-index: -1;
  }
  .content-container {
    display: flex;
    flex-direction: column-reverse;
    height: 100vh;
    justify-content: center;
    align-items: center;
    color: #465a64;
    font-family: var(--body-font);
  }
  .message {
    text-align: center;
  }
  @media (min-width: 600px) {
    .content-container {
      flex-direction: row;
    }
    .message {
      flex: 1;
      padding-left: 4rem;
      text-align: unset;
    }
    .graphic {
      flex: 1;
    }
  }
  .error {
    display: flex;
    align-items: center;
  }
  .letter {
    font-size: var(--status-code-size);
    font-weight: bold;
  }
  .button {
    margin-top: 2rem;
    display: inline-block;
    border-radius: 0.25rem;
    padding: 0.75rem;
    text-decoration: none;
    color: #cdd0db;
    background-color: #27346a;
  }
</style>
