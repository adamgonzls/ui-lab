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
    <div class="background-blob">blob here</div>
    <div>
      <h1>Oops!</h1>
      <p>Houston, we have a 404.</p>
      <p>Page not found in this galaxy.</p>
      <a href="/">Head back home</a>
    </div>
    <div>
      <div class="error">
        <span class="letter">4</span>
        <Moon additionalClasses="rotate" />
        <span class="letter">4</span>
      </div>
      <Astronaut additionalClasses="floating" />
      <Moon additionalClasses="rotate" />
      <!-- <FallingStar /> -->
    </div>
  </main>
</div>

<style>
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
    height: 200px;
    width: 200px;
    z-index: -1;
  }
  .content-container {
    display: flex;
    justify-content: center;
  }
  .error {
    display: flex;
  }
  .letter {
    font-size: 3rem;
    font-weight: bold;
  }
</style>
