<script>
  import "$lib/assets/fonts/stylesheet.css"
  import "$lib/assets/fonts/06-user-profile/stylesheet.css"
  import "$lib/assets/fonts/23-onboarding/stylesheet.css"
  const firstName = "Adam"
  import CabinImage from "$lib/assets/images/23-onboarding/mystic-cabin.jpg"
  let step = 1
</script>

<div class="content-container">
  <main>
    <h1>Mystic Cliffs Resort</h1>
    <div class="step">
      <div class="hero__image"></div>
      <!-- <img src={CabinImage} alt="" /> -->
      <h2 class="step__title">Let's Get Started!</h2>
      <p class="step__description">
        We're so glad you've chosen to spend your time with us. To make your
        stay extra special, let's start by getting to know you a little better.
      </p>
      <div class="pagination">
        <div class="pagination-step"></div>
        <div class="pagination-step active"></div>
        <div class="pagination-step"></div>
      </div>
    </div>

    <!-- <div>
      <h2>Hi {firstName}!</h2>
      <p>
        Welcome! We're excited to have you here. To personalize your experience,
        let's start with your name.
      </p>
    </div> -->
  </main>
</div>

<style>
  :root {
    --header-font: "Oleo Script", serif;
    --body-font: "Open Sans", sans-serif;
  }
  h1 {
    font-family: var(--header-font);
    font-size: 2rem;
    letter-spacing: -0.1rem;
  }
  .content-container {
    background-color: red;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--body-font);
  }
  main {
    max-width: 65%;
    margin: 1rem;
    padding: 1rem;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    /* height: 90vh; */
    background-color: #f5f5f5;
    border-radius: 10px;
  }
  .step__title {
    margin-top: 1rem;
  }
  .step__description {
    margin-top: 1rem;
  }
  .hero__image {
    border-radius: 10px;
    width: 100%;
    height: 300px;
    object-fit: cover;
    background-image: url($lib/assets/images/23-onboarding/mystic-cabin.jpg);
    background-size: cover;
    background-position: center;
  }
  .pagination {
    margin-top: 1rem;
    text-align: center;
  }

  .pagination-step {
    width: 16px;
    height: 16px;
    background: linear-gradient(
      135deg,
      #ff9ecb,
      #d1c1ff,
      #89d8e2
    ); /* Soft pink, lavender, and teal */
    border-radius: 50%;
    margin: 0 5px;
    display: inline-block;
    opacity: 0.5;
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  .pagination-step.active {
    background: linear-gradient(
      135deg,
      #ffb3da,
      #e5d4ff,
      #a6e1e9
    ); /* Brighter aurora-inspired hues for active state */
    opacity: 1;
    transform: scale(1.1); /* Slightly enlarge to indicate progress */
    box-shadow: 0 0 10px rgba(255, 179, 218, 0.6); /* Add a soft pink glow */
  }
</style>
