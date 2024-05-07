<script>
  import Collaborative from "./Collaborative.svelte"
  import ChoosePlan from "./ChoosePlan.svelte"
  import VideoFeature from "./VideoFeature.svelte"
  import AboutCircleUp from "./AboutCircleUp.svelte"
  import ViewFeature from "./ViewFeature.svelte"
  import HowItWorks from "./HowItWorks.svelte"
  import OurBlog from "./OurBlog.svelte"
  import VideoConference from "$lib/assets/images/video-conference-1.mp4"
  import Interview from "$lib/assets/images/interview.mp4"
  const melrose = "#9d96fe"
  const midnightBlue = "#3f3a72"
</script>

<div class="marquee">
  <div class="marquee__content scroll">
    <Collaborative />
    <ChoosePlan />
    <VideoFeature videoSrc={VideoConference} />
    <AboutCircleUp />
    <ViewFeature
      marqueeText="View feature set"
      marqueeIcon="eye"
      bgColor={midnightBlue}
    />
    <HowItWorks />
    <OurBlog />
    <VideoFeature videoSrc={Interview} />
    <ViewFeature
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
    <ViewFeature
      marqueeText="View feature set"
      marqueeIcon="eye"
      bgColor={midnightBlue}
    />
    <HowItWorks />
    <OurBlog />
    <VideoFeature videoSrc={Interview} />
    <ViewFeature
      marqueeText="View updates"
      marqueeIcon="clock"
      bgColor={melrose}
    />
  </div>
</div>

<style>
  .marquee {
    margin-top: 40px;
    display: flex;
    gap: 0.5rem;
    overflow: hidden;
    position: relative;
  }
  .marquee__content {
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 100%;
    gap: 0.5rem;
  }
  .scroll {
    animation: scroll 15s linear infinite;
  }
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 0.5rem));
    }
  }
</style>
