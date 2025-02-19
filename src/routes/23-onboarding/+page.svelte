<script>
  import "$lib/assets/fonts/stylesheet.css"
  import "$lib/assets/fonts/06-user-profile/stylesheet.css"
  import "$lib/assets/fonts/23-onboarding/stylesheet.css"
  import AloeVera from "$components/05-app-icon/AloeVera.svelte"
  import DesertResortArch from "$lib/assets/images/23-onboarding/desert-resort-arch.jpg"
  import DesertResort1 from "$lib/assets/images/23-onboarding/desert-resort-1.jpg"
  import DesertResortPool from "$lib/assets/images/23-onboarding/desert-resort-pool.jpg"
  import DesertResortHouseDeck from "$lib/assets/images/23-onboarding/desert-resort-house-deck.jpg"
  const brandColors = [
    {
      color: "#297373",
    },
    {
      color: "#F0AE8E",
    },
    {
      color: "#C2D6C2",
    },
    {
      color: "#C57045",
    },
    {
      color: "#EAC787",
    },
    {
      color: "#2B2B2B",
    },
  ]

  const resortName = "Herbarium House"
  let formData = {
    firstName: "",
    emailAddress: "",
  }
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
      backgroundImage: DesertResortArch,
      title: "Let's Get Started!",
      description:
        "We're so glad you've chosen to spend your time with us. To make your stay extra special, let's start by getting to know you a little better.",
      labelText: "Please enter your first name:",
      inputName: "firstNameInput",
      inputType: "text",
      variableKey: "firstName",
    },
    {
      backgroundImage: DesertResort1,
      title: `Hi ${formData.firstName}!`,
      description: `At ${resortName}, we take pride in personalizing every aspect of your experience. From amenities to special services, everything is designed with you in mind, ${formData.firstName}.`,
    },
    {
      backgroundImage: DesertResortPool,
      title: "What's Your Email?",
      description:
        "We'll need your email to send you important updates and information about your stay.",
      labelText: "Please enter your email address:",
      inputName: "emailInput",
      inputType: "email",
      variableKey: "emailAddress",
    },
    {
      backgroundImage: DesertResortHouseDeck,
      title: `That's it! You're Registered, ${formData.firstName}`,
      description: `
        <p class="step__description--multiline">
          Welcome to ${resortName}, where unforgettable memories are made.
        </p>
        <p class="step__description--multiline">
          We've sent a confirmation to <strong>${formData.emailAddress}</strong>.
          Check your inbox for important updates about your stay.
        </p>
        <p class="step__description--multiline">
          We're thrilled to have you with us and can't wait to make your stay
          special!
        </p>
        `,
    },
  ]
</script>

<div class="content-container">
  <main>
    <div class="resort-header">
      <AloeVera classes="aloe-50" />
      <h1>{resortName}</h1>
    </div>
    {#if currentStep <= processSteps.length}
      {#each processSteps as { backgroundImage, title, description, inputName, inputType, labelText, variableKey }, i}
        {#if currentStep === i + 1}
          <div class="step">
            <div
              class="hero__image"
              style={`background-image: url('${backgroundImage}');`}
            ></div>
            <h2 class="step__title">{title}</h2>
            <div class="step__description">
              {@html description}
            </div>
            {#if labelText}
              <div class="step__form">
                <label class="step__label" for={inputName}>{labelText}</label>
                <input
                  class="step__input"
                  id={inputName}
                  type="text"
                  bind:value={formData[variableKey]}
                />
              </div>
            {/if}
            <div class="step__buttons">
              {#if currentStep < processSteps.length}
                <button
                  class="step__button {currentStep === 1
                    ? 'step__button--disabled'
                    : ''}"
                  disabled={currentStep === 1}
                  on:click={prevButton}>Previous</button
                >
                <button
                  class="step__button"
                  disabled={!formData.firstName ||
                    (currentStep === processSteps.length &&
                      !formData.emailAddress)}
                  on:click={nextButton}
                  >{processSteps.length - 1 === currentStep
                    ? "Finish"
                    : "Continue"}</button
                >
              {:else}
                <button class="step__button" on:click={prevButton}>Back</button>
              {/if}
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
    {/if}
  </main>
</div>

<style>
  :root {
    --header-font: "EB Garamond", serif;
    --body-font: "Open Sans", sans-serif;
    --accent-color: #297373;
    --button-hover: #1f5e5e;
    --button-disabled: #a0c4c4;
    --charcoal-black: #2b2b2b;
    --pale-linen: #faf7f2;
  }
  h1,
  h2 {
    font-family: var(--header-font);
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0;
    color: #000000;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  .content-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eac787;
    font-family: var(--body-font);
  }
  main {
    max-width: 100%;
    padding: 1rem;
    background-color: var(--pale-linen);
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
  .resort-header {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  .step {
    margin-top: 0.5rem;
  }
  .step__title {
    margin-top: 1rem;
    font-family: var(--header-font);
  }
  .step__description,
  :global(.step__description--multiline) {
    margin-top: 1rem;
  }
  .hero__image {
    border-radius: 10px;
    width: 100%;
    height: 400px;
    object-fit: cover;
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
    border-bottom: 2px solid var(--charcoal-black);
    padding: 0.5rem 1rem;
    width: 100%;
    background-color: var(--pale-linen);
  }
  .step__buttons {
    display: flex;
    margin-top: 3rem;
    justify-content: center;
    gap: 0.5rem;
  }
  .step__button {
    padding: 0.5rem 1rem;
    background-color: var(--accent-color);
    border-radius: 10px;
    border: none;
    color: var(--pale-linen);
    font-size: 1.15rem;
    font-family: var(--header-font);
    font-weight: 600;
    cursor: pointer;
    transition:
      background-color 100ms ease-in-out,
      opacity 200ms ease-in-out;
  }
  .step__button:hover:not(.step__button--disabled) {
    background-color: var(--button-hover);
  }
  .step__button--disabled {
    background-color: var(--button-disabled);
    cursor: not-allowed;
  }
  .pagination {
    margin-top: 2rem;
    text-align: center;
  }
  .pagination-step {
    width: 16px;
    height: 16px;
    background: linear-gradient(135deg, #16abc5, #297373);
    border-radius: 50%;
    margin: 0 5px;
    display: inline-block;
    opacity: 0.5;
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }
  .pagination-step.active {
    background: linear-gradient(135deg, #16abc5, #297373);
    opacity: 1;
    transform: scale(1.1); /* Slightly enlarge to indicate progress */
    box-shadow: 0 0 12px rgba(22, 171, 197, 0.6);
  }
  .accent--text {
    font-family: var(--header-font);
    color: var(--accent-color);
  }
</style>
