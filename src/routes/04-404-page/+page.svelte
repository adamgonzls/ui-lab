<script>
  import Moon from "../../components/04-404-page/Moon.svelte"
  import Astronaut from "../../components/04-404-page/Astronaut.svelte"
  import FallingStar from "../../components/04-404-page/FallingStar.svelte"
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
    <div class="background-blob"></div>
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
      <Astronaut additionalClasses="astronaut floating" />
      <!-- <FallingStar /> -->
    </div>
  </main>
</div>

<style>
  :root {
    --status-code-size: 7rem;
    --body-font: "Open Sans", sans-serif;
  }
  .navigation__container {
    display: flex;
  }
  .navigation__links {
    display: flex;
    list-style-type: none;
  }
  .background-blob {
    position: absolute;
    background-color: #f0f0f0;
    border-radius: 50%;
    left: 0;
    height: 100%;
    width: 200px;
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
  @media (min-width: 600px) {
    .content-container {
      flex-direction: row;
    }
    .message {
      flex: 1;
      padding-left: 2rem;
    }
    .graphic {
      flex: 1;
    }
  }
  .message {
    /* flex: 1; */
    /* padding-left: 2rem; */
  }
  .graphic {
    /* flex: 1; */
  }
  .error {
    display: flex;
    align-items: center;
  }
  .error > * {
    /* flex: 1; */
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
