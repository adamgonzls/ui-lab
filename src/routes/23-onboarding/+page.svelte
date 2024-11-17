<script>
  import "$lib/assets/fonts/stylesheet.css"
  import "$lib/assets/fonts/06-user-profile/stylesheet.css"
  import "$lib/assets/fonts/23-onboarding/stylesheet.css"
  const resortName = "Mystic Cliffs Resort"
  let firstName = "Friend"
  import CabinImage from "$lib/assets/images/23-onboarding/mystic-cabin.jpg"
  function nextButton() {
    console.log("Next button clicked")
    currentStep += 1
  }
  function prevButton() {
    currentStep -= 1
  }
  let currentStep = 1
  $: processSteps = [
    {
      title: "Let's Get Started!",
      description:
        "We're so glad you've chosen to spend your time with us. To make your stay extra special, let's start by getting to know you a little better.",
    },
    {
      title: `Hi ${firstName}!`,
      description: `At ${resortName}, we take pride in personalizing every aspect of your experience. From amenities to special services, everything is designed with you in mind, ${firstName}.`,
    },
    {
      title: "What's Your Email?",
      description:
        "We'll need your email to send you important updates and information about your stay.",
    },
  ]
</script>

<div class="content-container">
  <main>
    <h1>{resortName}</h1>
    {#each processSteps as step, i}
      {#if currentStep === i + 1}
        <div class="step">
          <div class="hero__image"></div>
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
            The name you entered is {firstName}
          {/if}
          <div class="step__buttons">
            <button class="step__button step__continue" on:click={prevButton}
              >Previous</button
            >
            <button
              class="step__button step__continue"
              disabled={!firstName}
              on:click={nextButton}>Continue</button
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

    <!-- <input bind:value={firstName} type="text" />
    <p>Hello {firstName}</p> -->
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
    font-family: var(--header-font);
    letter-spacing: -0.1rem;
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
</style>
