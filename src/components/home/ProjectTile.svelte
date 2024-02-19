<script lang="ts">
  export let link: string
  export let name: string
  export let description: string
  export let src: string
  const theme_pink = "#e38895"
  const theme_purple = "#323288"
</script>

<div class="grid-item">
  <div class="graphic-container">
    <div class="grid-item__bg">
      <img class="project-image" src={src} alt="">
      <div class="grid-item__art"></div>
    </div>
  </div>
  <div class="item-container">
    <!-- <a href={link}>UI Lab 1 -->
      <h2>{name}</h2>
      <p>{description}</p>
    <!-- </a> -->
  </div>
</div>

<style>
  .graphic-container {
    margin-bottom: 20px;
  }

  .grid-item.grid-item:nth-of-type(1) {
    padding-right: 40px;
    padding-left: 20px;
  }

  .grid-item.grid-item:nth-of-type(1) .grid-item__art {
    position: absolute;
    height: 20px;
    width: 50px;
    background-color: #323288;
  }

  .grid-item:nth-of-type(1) .grid-item__bg {
    background-color: #e38895;
    height: 100%;
  }

  .grid-item:nth-of-type(1) .project-image {
    padding-top: 20px;
    padding-right: 20px;
    padding-left: 40px;
  }

  .grid-item:nth-of-type(2) .grid-item__bg {
    color: #e38895;
    background: repeating-linear-gradient(
      #e38895,
      #e38895 10px,
      rgba(0,0,0,0) 10px,
      rgba(0,0,0,0) 20px
    );
  }

  .grid-item:nth-of-type(2) .project-image {
    padding: 20px;
  }

  .grid-item:nth-of-type(3) {
    padding-left: 60px;
  }

  .grid-item:nth-of-type(3) .graphic-container {
    margin-left: -20px;
  }

  .grid-item:nth-of-type(3) .grid-item__bg {
    margin-right: 20px;
    background-color: #e38895;
  }

  .grid-item:nth-of-type(3) .project-image {
    padding-left: 20px;
    padding-right: 20px;
  }

  .item-container {
    background-color: #323288;
    padding: 20px;
    margin-right: 20px;
    color: white;
  }
</style>