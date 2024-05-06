<script>
  import Collaborative from "../../components/03-landing-page/Collaborative.svelte"
  import ChoosePlan from "../../components/03-landing-page/ChoosePlan.svelte"
  import AboutCircleUp from "../../components/03-landing-page/AboutCircleUp.svelte"
  import ViewFeatureSet from "../../components/03-landing-page/ViewFeatureSet.svelte"
  import OurBlog from "../../components/03-landing-page/OurBlog.svelte"
  import HowItWorks from "../../components/03-landing-page/HowItWorks.svelte"
  import VideoConference from "$lib/assets/images/video-conference-1.mp4"
  import Interview from "$lib/assets/images/interview.mp4"
  import VideoFeature from "../../components/03-landing-page/VideoFeature.svelte"
  import Header from "../../components/03-landing-page/Header.svelte"
  const melrose = "#9d96fe"
  const midnightBlue = "#3f3a72"
  const offWhite = "#f3f5fd"
</script>

<div class="main-container">
  <main>
    <Header />
    <div class="hero">
      <div>
        <h2>Connect</h2>
        <img src="" alt="face" />
        <h2>Create</h2>
      </div>
      <div>
        <h2>Augment</h2>
        <img src="" alt="face" />
        <h2>Your</h2>
      </div>
      <div>
        <img src="" alt="face" />
        <h2>Reality</h2>
        <img src="" alt="face" />
      </div>
    </div>

    <div class="marquee">
      <div class="marquee__content scroll">
        <Collaborative />
        <ChoosePlan />
        <VideoFeature videoSrc={VideoConference} />
        <AboutCircleUp />
        <ViewFeatureSet
          marqueeText="View feature set"
          marqueeIcon="eye"
          bgColor={midnightBlue}
        />
        <HowItWorks />
        <OurBlog />
        <VideoFeature videoSrc={Interview} />
        <ViewFeatureSet
          marqueeText="View updates"
          marqueeIcon="clock"
          bgColor={melrose}
        />
      </div>
      <div class="marquee__content scroll">
        <Collaborative />
        <ChoosePlan />
        <VideoFeature videoSrc={VideoConference} />
        <AboutCircleUp />
        <ViewFeatureSet
          marqueeText="View feature set"
          marqueeIcon="eye"
          bgColor={midnightBlue}
        />
        <HowItWorks />
        <OurBlog />
        <VideoFeature videoSrc={Interview} />
        <ViewFeatureSet
          marqueeText="View updates"
          marqueeIcon="clock"
          bgColor={melrose}
        />
      </div>
    </div>
  </main>
</div>

<style>
  * {
    --body-font: "Open Sans";
    --selago: #f3f5fd;
    --blue-zodiac: #141054;
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
</style>
