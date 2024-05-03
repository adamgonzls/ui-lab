<script>
  import Circle from "../../components/03-landing-page/Circle.svelte"
  import Square from "../../components/03-landing-page/Square.svelte"
  import Gear from "../../components/03-landing-page/Gear.svelte"
  import Eye from "../../components/03-landing-page/Eye.svelte"
  import HowItWorks from "../../components/03-landing-page/HowItWorks.svelte"
  const melrose = "#9d96fe"
  const offWhite = "#f3f5fd"
</script>

<div class="main-container">
  <main>
    <nav>
      <h1><a href="#">CircleUp</a></h1>
      <ul>
        <li>Features</li>
        <li>Privacy</li>
        <li>Help Centre</li>
        <li>Blog</li>
      </ul>
      <div>
        <a href="#">Log in</a>
        <a href="#">Sign up</a>
      </div>
    </nav>
    <h2>Connect</h2>
    <img src="" alt="face" />
    <h2>Create</h2>
    <h2>Augment</h2>
    <img src="" alt="face" />
    <h2>Your</h2>
    <img src="" alt="face" />
    <h2>Reality</h2>
    <img src="" alt="face" />

    <div class="marquee">
      <div class="marquee__content scroll">
        <div class="marquee__item marquee__item--trapezoid">
          <h3>Collaborative</h3>
        </div>
        <div class="marquee__item">
          <Circle />
          <h3>Choose your own plan</h3>
        </div>
        <div class="marquee__item">(playing video)</div>
        <div class="marquee__item">
          <Square />
          <h3>About CircleUp</h3>
        </div>
        <div class="marquee__item">
          <div class="spin__container">
            <div class="spin">
              <Gear fillColor="#3f3a72" />
            </div>
            <h3 class="spin__text">
              <div class="eye__container">
                <Eye />
              </div>
              View feature set
            </h3>
          </div>
        </div>
        <HowItWorks />
        <div class="marquee__item"><h3>Our blog</h3></div>
        <div class="marquee__item">(playing video)</div>
        <div class="marquee__item">
          <div class="spin">
            <Gear fillColor="#c5c1ff" />
          </div>
          <h3>View updates</h3>
        </div>
      </div>
      <div class="marquee__content scroll">
        <div class="marquee__item marquee__item--trapezoid">
          <h3>Collaborative</h3>
        </div>
        <div class="marquee__item">
          <Circle />
          <h3>Choose your own plan</h3>
        </div>
        <div class="marquee__item">(playing video)</div>
        <div class="marquee__item">
          <Square />
          <h3>About CircleUp</h3>
        </div>
        <div class="marquee__item">
          <div class="spin__container">
            <div class="spin">
              <Gear fillColor="#3f3a72" />
            </div>
            <h3 class="spin__text">
              <div class="eye__container">
                <Eye />
              </div>
              View feature set
            </h3>
          </div>
        </div>
        <HowItWorks />
        <div class="marquee__item"><h3>Our blog</h3></div>
        <div class="marquee__item">(playing video)</div>
        <div class="marquee__item">
          <div class="spin">
            <Gear fillColor="#c5c1ff" />
          </div>
          <h3>View updates</h3>
        </div>
      </div>
    </div>
  </main>
</div>

<style>
  * {
    --body-font: "Open Sans";
    --selago: #f3f5fd;
    --blue-zodiac: #141054;
    --midnight-blue: #3f3a72;
  }
  .main-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: var(--selago);
    min-height: 100vh;
  }
  main {
    margin: 0 auto;
    border: 5px solid var(--blue-zodiac);
    padding: 2rem;
    /* width: 90%; */
    max-width: 1200px;
    background-color: var(--white);
    border-radius: 25px;
    font-family: var(--body-font);
  }
  .marquee {
    display: flex;
    gap: 1rem;
    overflow: hidden;
    position: relative;
    /* height: 40vh; */
  }
  .marquee__content {
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 100%;
    gap: 1rem;
    /* animation: scroll 5s linear infinite; */
  }
  .scroll {
    animation: scroll 15s linear infinite;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 1rem));
    }
  }

  .spin {
    animation: spin 5s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spin__container {
    border: 2px solid red;
    position: relative;
    width: 150px;
    height: 150px;
  }

  .eye__container {
    margin-left: auto;
    margin-right: auto;
    width: 25px;
  }

  .spin__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
  }

  .marquee__item--trapezoid {
    /* background-color: #f5d6fe; */
    border-bottom: 100px solid #f5d6fe;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    height: 0;
    width: 100px;
  }
  .marquee__item--circle {
    width: 150px;
    height: 150px;
    background-color: #3e8f51;
    border-radius: 50%;
  }
</style>
