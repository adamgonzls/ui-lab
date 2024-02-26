<script>
  import fabricChair from "$lib/assets/images/fabric-armchair-610w.png"
  import armchair from "$lib/assets/images/modern-living-room-wooden-armchair-308w.png"
  import rockingChair from "$lib/assets/images/rocking-chair-315w.png"
  import roundTable from "$lib/assets/images/round-wooden-vintage-table-389w.png"
  import redThrome from "$lib/assets/images/red-and-gold-throne-chair-392w.png"
</script>

<div class="content-container">
  <img class="img--rotate" src={fabricChair} alt="Cantilever chair">
  <img class="img--rotate-2" src={armchair} alt="Cantilever chair">
  <div class="info-container">
    <div>
      <nav>
        <a href="#">Furniture</a>
        <a href="#">Designers</a>
        <a href="#">Trends</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a href="#">Shopping Cart</a>
      </nav>
      <div class="product-container">
        <div class="data-container">
          <h1>Relax Seat</h1>
          <h2>Feel the essence of comfort</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta optio, quibusdam adipisci laboriosam, temporibus in voluptates esse sequi debitis ad ipsum! Sit molestias autem quidem labore doloribus necessitatibus debitis numquam?</p>
          <span>390$</span>
          <button>Add to cart</button>
        </div>
        <div>color</div>
        <div class="product-image">
          <img src={fabricChair} alt="">
        </div>
      </div>
      <div class="related-products">
        <img class="related-image" src={rockingChair} alt="">
        <img class="related-image" src={roundTable} alt="">
        <img class="related-image" src={redThrome} alt="">
      </div>
    </div>
  </div>
</div>

<style>
  .content-container {
    position: relative;
    height: 100vh;
    background-color: #e1e1e1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .info-container {
    margin: 60px;
    padding: 20px;
    background-color: #fff;
    z-index: 10;
    position: relative;
  }
  .product-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .product-container > div {}
  .data-container,
  .product-image {
    flex: 1;
  }
  .related-products {
    position: absolute;
    left: 0;
    display: flex;
    gap: 80px;
  }
  .related-image {
    height: 100px;
    transition: transform 0.2s;
  }
  .related-image:hover {
    transform: scale(1.1);
  }
  .img--rotate {
    transform: rotate(-30deg);
    position: absolute;
    top: -25%;
    left: -25%;
  }
  .img--rotate-2 {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 11;
  }
</style>