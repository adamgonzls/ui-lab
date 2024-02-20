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
  <div class="info-container">
    <a class="info__link" href={link}>
      <h2>{name}</h2>
      <p>{description}</p>
    </a>
  </div>
</div>

<style>
  .info-container {
    margin-top: 10px;
    margin-right: 20px;
    background-color: #323288;
    color: white;
  }

  .info__link {
    display: block;
    padding: 20px;
    text-decoration: none;
    color: white;
  }

  .grid-item.grid-item:nth-of-type(1) {
    padding-right: 40px;
    padding-left: 20px;
  }

  .grid-item.grid-item:nth-of-type(1) .grid-item__art {
    position: absolute;
    height: 100%;
    width: 110%;
    right: 20px;
    bottom: 0;
    z-index: -1;
    color: #323288;
    background: repeating-linear-gradient(
      #323288,
      #323288 10px,
      rgba(0,0,0,0) 10px,
      rgba(0,0,0,0) 20px
    );
  }

  .grid-item:nth-of-type(1) .grid-item__bg {
    background-color: #e38895;
    height: 100%;
    position: relative;
    z-index: 1;
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
    position: relative;
    z-index: 1;
  }

  .grid-item:nth-of-type(3) .project-image {
    padding-left: 20px;
    padding-right: 20px;
  }

  .grid-item:nth-of-type(3) .grid-item__art {
    color: #323288;
    background: repeating-linear-gradient(
      #323288,
      #323288 10px,
      rgba(0,0,0,0) 10px,
      rgba(0,0,0,0) 20px
    );
    height: 110%;
    width: 110%;
    position: absolute;
    left: 20px;
    bottom: 0;
    z-index: -1;
  }

  .grid-item:nth-of-type(4) .graphic-container {
    position: relative;
  }

  .grid-item:nth-of-type(4) .grid-item__bg {
    background-color: #e38895;
  }

  .grid-item:nth-of-type(4) .project-image {
    padding-top: 20px;
    padding-right: 20px;
  }
  
</style>