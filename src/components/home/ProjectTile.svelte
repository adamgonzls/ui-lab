<script lang="ts">
  export let link: string
  export let name: string
  export let description: string
  export let src: string
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
  h2 {
    font-size: 1.25rem;
    font-family: var(--header-font);
  }

  .info-container {
    margin-top: 10px;
    margin-right: 20px;
    background-color: var(--deep-purple);
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
    color: var(--deep-purple);
    background: repeating-linear-gradient(
      var(--deep-purple),
      var(--deep-purple) 10px,
      rgba(0,0,0,0) 10px,
      rgba(0,0,0,0) 20px
    );
  }

  .grid-item:nth-of-type(1) .grid-item__bg {
    background-color: var(--deep-blush);
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
    color: var(--deep-blush);
    background: repeating-linear-gradient(
      to top,
    var(--deep-blush),
      var(--deep-blush) 10px,
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
    background-color: var(--deep-blush);
    position: relative;
    z-index: 1;
  }

  .grid-item:nth-of-type(3) .project-image {
    padding-left: 20px;
    padding-right: 20px;
  }

  .grid-item:nth-of-type(3) .grid-item__art {
    color: var(--deep-purple);
    background: repeating-linear-gradient(
      var(--deep-purple),
      var(--deep-purple) 10px,
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
    margin-right: 20px;
    padding-bottom: 40px;
    padding-left: 40px;
    position: relative;
  }

  .grid-item:nth-of-type(4) .project-image {
    box-shadow: 20px -20px 0 var(--deep-blush); 
    margin-right: 20px;
  }

  .grid-item:nth-of-type(5) .project-image {
    padding: 20px;
  }
  
</style>