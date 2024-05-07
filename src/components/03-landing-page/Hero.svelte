<script>
  import SocialMan1 from "$lib/assets/images/social-man-1.png"
  import SocialWoman1 from "$lib/assets/images/social-woman-1.png"
  import SocialWoman2 from "$lib/assets/images/social-woman-2.png"
  import SocialWoman3 from "$lib/assets/images/social-woman-3.png"
</script>

<div class="hero">
  <div class="hero__row">
    <h2 class="hero__text">Connect</h2>
    <span class="hero__dot">&#8226;</span>
    <span class="oval-image" style={`background-image: url(${SocialMan1})`}
    ></span>
    <h2 class="hero__text">Create</h2>
  </div>
  <div class="hero__row hero__row--top-margin">
    <h2 class="hero__text">Augment</h2>
    <span class="oval-image" style={`background-image: url(${SocialWoman1})`}
    ></span>
    <h2 class="hero__text">Your</h2>
  </div>
  <div class="hero__row hero__row--top-margin">
    <span class="oval-image" style={`background-image: url(${SocialWoman3})`}
    ></span>
    <h2 class="hero__text">Reality</h2>
    <span class="hero__dot">&#8226;</span>
    <span class="oval-image" style={`background-image: url(${SocialWoman2})`}
    ></span>
  </div>
  <h3 class="hero__cta hero__row">(Download now)</h3>
</div>

<style>
  .hero {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--blue-zodiac);
  }
  .hero__row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }
  .hero__row--top-margin {
    margin-top: 0.25rem;
  }
  .hero__dot {
    line-height: 0.8em;
    font-size: 3rem;
  }
  .oval-image {
    width: 80px;
    height: 50px;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 40px;
  }
  .hero__text {
    font-family: var(--body-font);
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 0.8em;
  }
  .hero__cta {
    margin-top: 20px;
    font-size: 3rem;
    font-family: var(--header-font);
    font-weight: 100;
    line-height: 1;
    color: var(--pepto);
  }
  @media (min-width: 500px) {
    .hero__row {
      gap: 0.625rem;
    }
    .hero__text {
      font-size: 4rem;
    }
    .hero__cta {
      font-size: 5rem;
    }
    .hero__row--top-margin {
      margin-top: 0.625rem;
    }
    .hero__dot {
      font-size: 5rem;
    }
  }
</style>
