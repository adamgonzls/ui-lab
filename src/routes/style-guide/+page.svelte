<script>
  import "$lib/assets/fonts/stylesheet.css"
  import "$lib/assets/fonts/03-landing-page/stylesheet.css"
  import "$lib/assets/fonts/12-ecommerce-shop/stylesheet.css"
  import "$lib/assets/fonts/24-boarding-pass/stylesheet.css"
</script>

<main>
  <h1>Style Guide</h1>
  <div class="block playfair-display">
    <h2 class="block__title">Playfair Display</h2>
    <p>
      The quick brown fox jumps over a lazy dog! Why vex bright jumpy quizzes?
    </p>
  </div>
  <div class="block oleo-script">
    <h2 class="block__title">Oleo Script</h2>
    <p>
      The quick brown fox jumps over a lazy dog! Why vex bright jumpy quizzes?
    </p>
  </div>
  <div class="block open-sans">
    <h2 class="block__title">Open Sans</h2>
    <p>
      The quick brown fox jumps over a lazy dog! Why vex bright jumpy quizzes?
    </p>
  </div>
  <div class="block poppins">
    <h2 class="block__title">Poppins</h2>
    <p>
      The quick brown fox jumps over a lazy dog! Why vex bright jumpy quizzes?
    </p>
  </div>
  <div class="block oswald">
    <h2 class="block__title">Oswald</h2>
    <p>
      The quick brown fox jumps over a lazy dog! Why vex bright jumpy quizzes?
    </p>
  </div>
</main>

<style>
  :root {
    --playfair-display-font: "Playfair Display", serif;
    --oleo-script-font: "Oleo Script", serif;
    --open-sans-font: "Open Sans", sans-serif;
    --poppins-font: "Poppins", sans-serif;
    --oswald-font: "Oswald", sans-serif;
  }
  main {
    padding: 1rem;
  }
  .block:first-of-type {
    margin-top: 0;
  }
  .block {
    margin-top: 2rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    border: 2px solid #4d4848;
  }
  .block__title {
    font-size: 3rem;
  }
  .playfair-display {
    font-family: var(--playfair-display-font);
    font-size: 2rem;
  }
  .oleo-script {
    font-family: var(--oleo-script-font);
    font-size: 2rem;
  }
  .open-sans {
    font-family: var(--open-sans-font);
    font-size: 2rem;
  }
  .poppins {
    font-family: var(--poppins-font);
    font-size: 2rem;
  }
  .oswald {
    font-family: var(--oswald-font);
    font-size: 2rem;
  }
</style>
