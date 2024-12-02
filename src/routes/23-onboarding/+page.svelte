<script>
  import "$lib/assets/fonts/stylesheet.css"
  import "$lib/assets/fonts/06-user-profile/stylesheet.css"
  import "$lib/assets/fonts/23-onboarding/stylesheet.css"
  import CabinImage from "$lib/assets/images/23-onboarding/mystic-cabin.jpg"
  import DockImage from "$lib/assets/images/23-onboarding/lakeside-cabin.jpg"
  import RoadImage from "$lib/assets/images/23-onboarding/mystic-road.jpg"

  const resortName = "Mystic Cliffs Resort"
  let firstName = ""
  let emailAddress = ""
  let currentStep = 1

  function nextButton() {
    console.log("Next button clicked")
    currentStep += 1
  }

  function prevButton() {
    currentStep -= 1
  }

  $: processSteps = [
    {
      backgroundImage: RoadImage,
      title: "Let's Get Started!",
      description:
        "We're so glad you've chosen to spend your time with us. To make your stay extra special, let's start by getting to know you a little better.",
    },
    {
      backgroundImage: DockImage,
      title: `Hi ${firstName}!`,
      description: `At ${resortName}, we take pride in personalizing every aspect of your experience. From amenities to special services, everything is designed with you in mind, ${firstName}.`,
    },
    {
      backgroundImage: CabinImage,
      title: "What's Your Email?",
      description:
        "We'll need your email to send you important updates and information about your stay.",
    },
  ]
</script>

<div class="content-container">
  <main>
    <h1>{resortName}</h1>
    {#if currentStep <= processSteps.length}
      {#each processSteps as step, i}
        {#if currentStep === i + 1}
          <div class="step">
            <div
              class="hero__image"
              style={`background-image: url('${step.backgroundImage}');`}
            ></div>
            <h2 class="step__title">{step.title}</h2>
            <p class="step__description">
              {step.description}
            </p>
            {#if currentStep === 1}
              <div class="step__form">
                <label class="step__label" for="firstName"
                  >Please enter your first name:</label
                >
                <input
                  class="step__input"
                  id="firstNameInput"
                  type="text"
                  bind:value={firstName}
                />
              </div>
            {/if}
            {#if currentStep === processSteps.length}
              <div class="step__form">
                <label class="step__label" for="firstName"
                  >Please enter your email address:</label
                >
                <input
                  class="step__input"
                  id="emailInput"
                  type="text"
                  bind:value={emailAddress}
                />
              </div>
            {/if}
            <div class="step__buttons">
              <button
                class="step__button {currentStep === 1
                  ? 'step__button--disabled'
                  : ''}"
                disabled={currentStep === 1}
                on:click={prevButton}>Previous</button
              >
              <button
                class="step__button"
                disabled={!firstName ||
                  (currentStep === processSteps.length && !emailAddress)}
                on:click={nextButton}
                >{processSteps.length === currentStep
                  ? "Finish"
                  : "Continue"}</button
              >
            </div>
            <div class="pagination">
              {#each processSteps as step, index}
                <div
                  class="pagination-step"
                  class:active={index === currentStep - 1}
                ></div>
              {/each}
            </div>
          </div>
        {/if}
      {/each}
    {:else}
      <div class="greeting-page">
        <h2 class="greeting-page__title step__title">
          That's it! You're Registered, {firstName}!
        </h2>
        <p class="step__description">
          Welcome to {resortName}, where unforgettable memories are made.
        </p>
        <p class="step__description">
          We've sent a confirmation to <strong>{emailAddress}</strong>. Check
          your inbox for important updates about your stay.
        </p>
        <p class="step__description">
          We're thrilled to have you with us and can't wait to make your stay
          special!
        </p>
        <div class="step__buttons">
          <button class="step__button" on:click={prevButton}>Back</button>
        </div>
      </div>
    {/if}
  </main>
</div>

<style>
  :root {
    --header-font: "Oleo Script", serif;
    --body-font: "Open Sans", sans-serif;
    --accent-color: #cb5a8a;
  }
  h1 {
    font-family: var(--header-font);
    font-size: 2rem;
    letter-spacing: -0.1rem;
    color: var(--accent-color);
  }
  .content-container {
    background-color: #9eb3df;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--body-font);
  }
  main {
    max-width: 100%;
    padding: 1rem;
    background-color: #fff;
    border-radius: 10px;
  }
  @media screen and (min-width: 480px) {
    main {
      margin: 1rem;
      max-width: 90%;
    }
  }
  @media screen and (min-width: 768px) {
    main {
      max-width: 80%;
    }
  }
  @media screen and (min-width: 1024px) {
    main {
      max-width: 65%;
    }
  }
  .step__title {
    margin-top: 1rem;
    font-family: var(--header-font);
    letter-spacing: -0.1rem;
    color: var(--accent-color);
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
  .step__form {
    margin-top: 1rem;
  }
  .step__label {
    font-weight: bold;
  }
  .step__input {
    border: none;
    border-bottom: 2px solid #9eb3df;
    padding: 0.5rem 1rem;
    width: 100%;
  }
  .step__buttons {
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    gap: 0.5rem;
  }
  .step__button {
    padding: 0.5rem 1rem;
    background-color: #cb5a8a;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 1.25rem;
    font-family: var(--header-font);
    cursor: pointer;
  }
  .step__button:hover:not(.step__button--disabled) {
    background-color: #b6376d;
  }
  .step__button--disabled {
    background-color: #c2849e;
    cursor: not-allowed;
  }
  .pagination {
    margin-top: 2rem;
    text-align: center;
  }

  .pagination-step {
    width: 16px;
    height: 16px;
    background: linear-gradient(
      135deg,
      #ff7eb3,
      #ffb6d5,
      #e1a3ff
    ); /* Deep pink, soft pink, and lavender */
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
      #ff4f8b,
      #ff8fbf,
      #d48fff
    ); /* Richer pinks and purples for active state */
    opacity: 1;
    transform: scale(1.1); /* Slightly enlarge to indicate progress */
    box-shadow: 0 0 12px rgba(255, 79, 139, 0.6); /* Add a deep pink glow */
  }
  .accent--text {
    font-family: var(--header-font);
    color: var(--accent-color);
  }
</style>
